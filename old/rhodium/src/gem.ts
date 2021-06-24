import { Payload } from 'ts-nats';

import type Rhodium from './rhodium';
import type { GemMsg, GemOption, Handler, SpecErr } from './general';
import type { Client, Subscription } from 'ts-nats';

export default class GEM {
	native!: Client;
	subs: Record<string | number, Subscription> = {};
	options: GemOption = {
		name: this.elem.App.unique(),
		natsOption: {
			servers: ['nats://0.0.0.0:4222'],
			user: 'root',
			pass: 'toor',
			payload: Payload.JSON,
		},
	};
	gem = true;

	constructor(public elem: Rhodium, options?: GemOption) {
		this.options = Object.assign(this.options, options);
	}

	async run(): Promise<SpecErr | boolean> {
		this.native = await this.elem.nats.connect(this.options.natsOption);
		return await new Promise((resolve, reject) => {
			this.native.on('connect', () => {
				resolve(false);
			});

			this.native.on('error', (err: SpecErr) => {
				reject(err);
			});
		});
	}

	async follow(topic: string, handler: Handler) {
		return await this.native.subscribe(topic, (err, res) => {
			new Promise((resolve, reject) => {
				Promise.resolve(
					handler.apply(this.elem, [
						{ err, pure: res, topic },
						res.data,
					]),
				)
					.then((data) => {
						resolve(data);
					})
					.catch((err) => {
						reject(err);
					});
			})
				.then((data: any) => {
					this.native.publish(res.reply!, {
						err: false,
						data: data,
					});
				})
				.catch((err: any) => {
					this.native.publish(res.reply!, {
						err: this.elem.utils.stringifyError(err),
						data: 'handler error',
					});
				});
		});
	}

	async send(topic: string, data?: any, timeout?: number): Promise<GemMsg> {
		if (!timeout) {
			timeout = 1000;
		}

		return (await this.native.request(topic, timeout, data)) as GemMsg;
	}

	publish(topic: string, data?: any, reply?: string) {
		this.native.publish(topic, data, reply);
		return this;
	}

	async subscribe(topic: string, handler: Handler) {
		return await this.native.subscribe(topic, (err, res) => {
			Promise.resolve(
				handler.apply(this.elem, [{ err, pure: res, topic }, res.data]),
			);
		});
	}
}

import type Rhodium from './rhodium';
import type {
	Msg,
	MsgCallback,
	NatsConnectionOptions,
	Subscription,
} from 'ts-nats';

export type NatsOption = NatsConnectionOptions;

export interface GemOption {
	natsOption?: NatsOption;
	name?: string;
}

export type Handler = (
	this: Rhodium,
	head: {
		err: Parameters<MsgCallback>[0];
		pure: Parameters<MsgCallback>[1];
		topic: string;
	},
	body: any,
) => any;

export interface GemMsg extends Msg {
	data: {
		err: Error | false;
		data: any;
	};
}

export interface SpecErr extends Error {
	gem: false;
}

export interface Sub extends Subscription {
	name: string;
}

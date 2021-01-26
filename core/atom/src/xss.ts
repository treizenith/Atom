import type { Handler } from './general';
import type Atom from './index';

export default function (xs: Atom['xs']) {
	return {
		Observable: class Observable {
			// native: this.xs.makeSubject();
			native!: ReturnType<Atom['xs']['makeSubject']>;
			pipe!: ReturnType<Atom['xs']['pipe']>;

			constructor({
				start,
				end,
			}: { start?: Handler; end?: Handler } = {}) {
				this.native = xs.makeSubject();

				this.pipe = xs.pipe(
					this.native.source,
					xs.onStart(start ? start : () => {}),
					xs.onEnd(end ? end : () => {}),
				);
			}

			next = (data: unknown) => {
				return this.native.next(data);
			};
			subscribe(handler: Parameters<Atom['xs']['subscribe']>[0]) {
				return xs.pipe(this.native.source, xs.subscribe(handler))[
					'unsubscribe'
				];
			}
			end() {
				return this.native.next(this.native.complete);
			}
		},
	};
}

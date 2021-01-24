import Atom, { OPT } from './index';
import type {
	FF,
	SpecKey,
	specPromise,
	Tasks,
	Tuple,
	TupleList,
} from './general';

export default class queue {
	id: SpecKey = Atom.unique();
	last: any = this.app.sym;
	tasks: TupleList = [];
	active!: Tuple;
	idle: boolean = true;
	history: any[] = [];

	constructor(public app: Atom, name?: SpecKey) {
		if (name) {
			this.id = name;
		}

		this.app.queues[this.id] = this;
	}

	async push(order: Tasks | Tasks[], err?: Tasks | Tasks[], options?: OPT) {
		order = (Atom._.is.arr(order) ? order : [order]) as Tasks[];
		err = (Atom._.is.arr(err) ? err : [err]) as Tasks[];
		if (this.idle) {
			this.active = [order, err];
			if (order && order.length > 0) {
				this.idle = false;

				let data = await this.play(this.last, options);

				this.idle = true;
				return data;
			} else {
				return this.app.sym;
			}
		} else {
			this.tasks.push([order, err]);
		}

		return this;
	}

	async play(res: any, options?: OPT): specPromise {
		if (this.active && this.active.length > 0) {
			let tasks = this.active[0];
			let err = this.active[1];
			let data: any = res;

			let current = tasks.shift();

			if (this.app._.is.prom(current)) {
				data = await new Promise((resolve) => {
					(current as specPromise)
						.then((res) => {
							resolve(res);
						})
						.catch((errRes) => {
							if (err.length > 0) {
								this.next(...err);
								resolve(errRes);
							} else {
								console.error(errRes);
								resolve(this.app.err);
							}
						});
				});
			} else if (this.app._.is.func(current)) {
				data = await new Promise((resolve) => {
					let rr = (current as FF).apply(this.app, [
						{
							queue: this,
							app: this.app,
							history: this.history,
							res: data,
							next: this.next.bind(this),
						},
					]);

					if (this.app._.is.prom(rr)) {
						rr.then((res: any) => {
							resolve(res);
						}).catch((errRes: any) => {
							if (err.length > 0) {
								this.next(...err);
								resolve(errRes);
							} else {
								console.error(errRes);
								resolve(this.app.err);
							}
						});
					} else {
						resolve(rr);
					}
				});
			} else {
				data = current;
			}

			this.last = data;
			this.history.push(data);

			if (tasks.length > 0) {
				return await this.play(data, options);
			} else {
				if (options) {
					if (options.clear) {
						this.history.pop();
						this.last = this.history[this.history.length - 1];
					}
				}

				return await this.skip(data, options);
			}
		} else {
			return this.app.sym;
		}
	}

	async skip(res: any, options?: OPT): Promise<any> {
		if (this.tasks.length > 0) {
			this.idle = false;
			this.active = this.tasks.shift()!;
			res = await this.play(res, options);
			this.idle = true;
			return await this.skip(res, options);
		} else {
			return res;
		}
	}

	next(...orders: Tasks[]) {
		this.active[0] = orders.concat(this.active[0]);
		return true;
	}
}

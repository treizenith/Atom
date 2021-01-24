import quark from '@treizenith/quark';
import $thrower from './thrower';
import $unique from './unique';
import $promise from './promise';
import $event from './event';
import $queue from './queue';
import * as $async from './async';

class Atom {
	static tag: string = '[ AtomJS ] ';
	static promise = $promise;
	static async = $async;
	// ts will set the type of quark itself
	static _ = quark;
	static thrower = $thrower;
	static unique = $unique;
	static event = $event;
	static version: number[] = [1, 0, 0];

	tag = Atom.tag;
	promise = Atom.promise;
	async = Atom.async;
	_ = Atom._;
	thrower = Atom.thrower;
	unique = Atom.unique;
	event = Atom.event;
	#version: number[] = Atom.version;

	sym = Symbol('ex');
	err = Symbol('err');
	#private: {
		privateKEY: string;
		trials: any[];
	} = {
		privateKEY: '',
		trials: [],
	};

	queue = $queue.bind(null, this);
	queues: Record<string | number | symbol, $queue> = {};
	publicKEY: string = 'EXORPIT';

	constructor(options?: OPT, priv?: string) {
		if (!this._.is.obj(options)) {
			this.thrower(
				['BASE ERR', 'first parameter must be an object !'],
				true,
			);
		}
		this.options = options;
		if (priv) {
			if (!this._.is.str(priv)) {
				this.#private.privateKEY = this.unique();
			} else {
				this.#private.privateKEY = priv;
			}
		}
	}

	set(priv: string, propName: string, value?: unknown): any {
		if (this.#private.privateKEY == priv) {
			return this._.obj.set(this.#private, propName, value);
		} else {
			this.#private.trials.push([priv, propName, value]);
			return this.thrower(
				[
					'BASE SECURITY ERR',
					'Atom.set needs priv to set any property on inctance',
				],
				false,
			);
		}
	}

	get(priv: string, propName: string): any {
		if (this.#private.privateKEY == priv) {
			return this._.obj.get(this.#private, propName);
		} else {
			this.#private.trials.push([priv, propName]);
			return this.thrower(
				[
					'BASE SECURITY ERR',
					'Atom.get needs priv to get any property on inctance',
				],
				false,
			);
		}
	}

	plugins: AtomPlugin[] = [];
	plug<T extends AtomPluginArg>(plugin: T): this & ReturnTypeOf<T> {
		if (plugin) {
			this.plugins = this.plugins.concat(plugin);
		}

		(Array.isArray(plugin) ? plugin : [plugin]).forEach((pl) => {
			Object.assign(this, pl(this, this.options));
		});

		return this as this & ReturnTypeOf<T>;
	}

	isErr(a: unknown) {
		return this.err === a;
	}

	checkVersion(version: string) {
		let x = true;
		version.split('.').map((y: any, i: number) => {
			if (y.includes('-')) {
				x = x && this.#version[i] <= parseInt(y.split('<').join(''));
			} else if (y.includes('+')) {
				x = x && this.#version[i] >= parseInt(y.split('>').join(''));
			} else if (y.includes('<')) {
				x = x && this.#version[i] < parseInt(y.split('<').join(''));
			} else if (y.includes('>')) {
				x = x && this.#version[i] > parseInt(y.split('>').join(''));
			} else {
				x = x && this.#version[i] == parseInt(y);
			}
		});
		return x;
	}

	options: any = {};
	$: Record<string | number | symbol, any> = {};
	[x: string]: any;
	[x: number]: any;
}

export default Atom;

// types

export type ApiExtension = { [key: string]: any; [key: number]: any };
export type AtomPlugin = (
	instance: Atom,
	options: any,
) => ApiExtension | undefined;

export type AtomPluginArg = AtomPlugin | AtomPlugin[];

export type UnionToIntersection<Union> = (
	Union extends any ? (argument: Union) => void : never
) extends (argument: infer Intersection) => void
	? Intersection
	: never;

export type AnyFunction = (...args: any[]) => any;

export type OPT = { priv?: string; [key: string]: any; [key: number]: any };

export type ReturnTypeOf<
	T extends AnyFunction | AnyFunction[]
> = T extends AnyFunction
	? ReturnType<T>
	: T extends AnyFunction[]
	? UnionToIntersection<ReturnType<T[number]>>
	: never;

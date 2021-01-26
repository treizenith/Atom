import quark from '@treizenith/quark';
import * as xs from 'wonka';

import $unique from './unique';
import thrower from './thrower';
import * as $async from './async';
import xss from './xss';
class Atom {
	static _ = quark;
	static thrower = thrower;
	static async = $async;
	static unique = $unique;
	static xs = xs;
	static xss = xss(xs);
	static tag: string = '[ AtomJS ] ';
	static sym = Symbol('ex');
	static err = Symbol('err');

	_ = Atom._;
	tag = Atom.tag;
	thrower = Atom.thrower;
	async = Atom.async;
	unique = Atom.unique;
	xs = Atom.xs;
	xss = Atom.xss;
	publicKEY: string = 'Treizenith';

	sym = Atom.sym;
	err = Atom.err;
	#private: {
		privateKEY: string;
		trials: any[];
	} = {
		privateKEY: '',
		trials: [],
	};

	options!: OPT;
	$: Record<string | number | symbol, any> = {};
	[x: string]: any;
	[x: number]: any;

	constructor(options?: OPT, priv?: string) {
		if (!this._.is.obj(options) && !this._.is.und(options)) {
			this.thrower.make(
				'options must be objects',
				{
					target: this.tag,
				},
				true,
			);
		}

		if (!this._.is.und(options)) {
			this.options = options;
		} else {
			this.options = {};
		}

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
			return this.thrower.make('invalid priv in set', {
				target: this.tag,
			});
		}
	}

	get(priv: string, propName: string): any {
		if (this.#private.privateKEY == priv) {
			return this._.obj.get(this.#private, propName);
		} else {
			this.#private.trials.push([priv, propName]);
			return this.thrower.make('invalid priv in get', {
				target: this.tag,
			});
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

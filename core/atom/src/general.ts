import type Atom from '.';
import type queue from './queue';

export type BaseHandler = (...args: any[]) => any;
export type Key = string | number | symbol;
export type SpecKey = string | number;
export type RecordAny = Record<Key, any>;

export interface API {
	res: any;
	history: any[];
	next: (...args: Tasks[]) => void;
	queue: queue;
	app: Atom;
}

export type specHandler = (a: API | any, ...args: any[]) => any;

export type specPromise = Promise<API | any | void>;
export type PF = (a: API) => specPromise;
export type F = (a: API) => any | void;
export type FF = PF | F;
export type Tasks = F | PF | specPromise;

export interface OPT {
	clear?: boolean;
}

export type Tuple = [Tasks[], Tasks[]];
export type TupleList = Tuple[];
export type TaskList = Record<Key, Tasks>;

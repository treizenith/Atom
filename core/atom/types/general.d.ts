import type Atom from '.';
import type queue from './queue';
export declare type BaseHandler = (...args: any[]) => any;
export declare type Key = string | number | symbol;
export declare type SpecKey = string | number;
export declare type RecordAny = Record<Key, any>;
export interface API {
    res: any;
    history: any[];
    next: (...args: Tasks[]) => void;
    queue: queue;
    app: Atom;
}
export declare type specHandler = (a: API | any, ...args: any[]) => any;
export declare type specPromise = Promise<API | any | void>;
export declare type PF = (a: API) => specPromise;
export declare type F = (a: API) => any | void;
export declare type FF = PF | F;
export declare type Tasks = F | PF | specPromise;
export interface OPT {
    clear?: boolean;
}
export declare type Tuple = [Tasks[], Tasks[]];
export declare type TupleList = Tuple[];
export declare type TaskList = Record<Key, Tasks>;
//# sourceMappingURL=general.d.ts.map
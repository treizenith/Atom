import quark from '@treizenith/quark';
import $thrower from './thrower';
import $unique from './unique';
import $event from './event';
import $queue from './queue';
import * as $async from './async';
declare class Atom {
    #private;
    static tag: string;
    static promise: PromiseConstructor;
    static async: typeof $async;
    static _: typeof quark;
    static thrower: typeof $thrower;
    static unique: typeof $unique;
    static event: typeof $event;
    static version: number[];
    tag: string;
    promise: PromiseConstructor;
    async: typeof $async;
    _: typeof quark;
    thrower: typeof $thrower;
    unique: typeof $unique;
    event: typeof $event;
    sym: symbol;
    err: symbol;
    queue: new (name?: string | number | undefined) => $queue;
    queues: Record<string | number | symbol, $queue>;
    publicKEY: string;
    constructor(options?: OPT, priv?: string);
    set(priv: string, propName: string, value?: unknown): any;
    get(priv: string, propName: string): any;
    plugins: AtomPlugin[];
    plug<T extends AtomPluginArg>(plugin: T): this & ReturnTypeOf<T>;
    isErr(a: unknown): boolean;
    checkVersion(version: string): boolean;
    options: any;
    $: Record<string | number | symbol, any>;
    [x: string]: any;
    [x: number]: any;
}
export default Atom;
export declare type ApiExtension = {
    [key: string]: any;
    [key: number]: any;
};
export declare type AtomPlugin = (instance: Atom, options: any) => ApiExtension | undefined;
export declare type AtomPluginArg = AtomPlugin | AtomPlugin[];
export declare type UnionToIntersection<Union> = (Union extends any ? (argument: Union) => void : never) extends (argument: infer Intersection) => void ? Intersection : never;
export declare type AnyFunction = (...args: any[]) => any;
export declare type OPT = {
    priv?: string;
    [key: string]: any;
    [key: number]: any;
};
export declare type ReturnTypeOf<T extends AnyFunction | AnyFunction[]> = T extends AnyFunction ? ReturnType<T> : T extends AnyFunction[] ? UnionToIntersection<ReturnType<T[number]>> : never;
//# sourceMappingURL=index.d.ts.map
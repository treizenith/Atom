import quark from '@treizenith/quark';
import $unique from './unique';
import * as $async from './async';
declare class Atom {
    #private;
    static _: typeof quark;
    static thrower: {
        make(message?: string | undefined, options?: import("./general").ThrowerOpt, strict?: boolean | undefined): never;
        isErr(a: any): boolean;
    };
    static async: typeof $async;
    static unique: typeof $unique;
    static xs: typeof import("xstream").Stream;
    static tag: string;
    static sym: symbol;
    static err: symbol;
    _: typeof quark;
    tag: string;
    thrower: {
        make(message?: string | undefined, options?: import("./general").ThrowerOpt, strict?: boolean | undefined): never;
        isErr(a: any): boolean;
    };
    async: typeof $async;
    unique: typeof $unique;
    xs: typeof import("xstream").Stream;
    publicKEY: string;
    sym: symbol;
    err: symbol;
    main: import("xstream").Stream<any>;
    options: OPT;
    $: Record<string | number | symbol, any>;
    [x: string]: any;
    [x: number]: any;
    constructor(options?: OPT, priv?: string);
    set(priv: string, propName: string, value?: unknown): any;
    get(priv: string, propName: string): any;
    plugins: AtomPlugin[];
    plug<T extends AtomPluginArg>(plugin: T): this & ReturnTypeOf<T>;
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
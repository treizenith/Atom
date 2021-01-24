export default class quark {
    static n: string;
    static version: {
        full: string;
        major: number;
        minor: number;
        bug: number;
    };
    static big: import("big.js").BigConstructor;
    static is: {
        arr: typeof import("./is/array").default;
        bool: typeof import("./is/boolean").default;
        date: typeof import("./is/date").default;
        func: typeof import("./is/function").default;
        nul: typeof import("./is/null").default;
        num: typeof import("./is/number").default;
        obj: typeof import("./is/object").default;
        prom: typeof import("./is/promise").default;
        reg: typeof import("./is/regexp").default;
        str: typeof import("./is/string").default;
        und: typeof import("./is/undefined").default;
    };
    static u: {
        pure: typeof import("./utils/pure").default;
        type: typeof import("./utils/type").default;
        merge: typeof import("./utils/merge").default;
    };
    static obj: {
        get: typeof import("./obj/get").default;
        set: typeof import("./obj/set").default;
        has: typeof import("./obj/has").default;
        del: typeof import("./obj/delete").default;
    };
}
//# sourceMappingURL=quark.d.ts.map
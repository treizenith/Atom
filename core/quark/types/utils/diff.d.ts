import type { Diff } from "../general";
export declare function compareValues(value1: unknown, value2: unknown): "unchanged" | "created" | "deleted" | "updated";
export declare function map(obj2: any, obj1: any): Diff;
export declare function same(obj1: any, obj2: any, level?: number): Diff;
//# sourceMappingURL=diff.d.ts.map
export declare const VALUE_CREATED = "created", VALUE_UPDATED = "updated", VALUE_DELETED = "deleted", VALUE_UNCHANGED = "unchanged";
export declare type Diff = {
    [key: string]: {
        $type: string;
        $data: any;
    } | Diff;
    [key: number]: {
        $type: string;
        $data: any;
    } | Diff;
};
export declare function compareValues(value1: unknown, value2: unknown): "created" | "updated" | "deleted" | "unchanged";
export declare function map(obj2: any, obj1: any): Diff | {
    $type: string;
    $data: any;
};
//# sourceMappingURL=diff.d.ts.map
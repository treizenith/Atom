import type Atom from '.';
export interface ThrowerOpt {
    code?: number | string;
    target?: string;
    status?: string;
    data?: any;
    err?: boolean | null;
}
export declare type Handler = () => any;
export declare type XS = Atom['xs'];
export declare type PIPE = XS['pipe'];
export declare type PIPE_PARAMS = Parameters<PIPE>;
export declare type SOURCE = PIPE_PARAMS[0];
export declare type UNARYFN = PIPE_PARAMS[1];
//# sourceMappingURL=general.d.ts.map
import type { Computation, Writer, Observable, ObservableMega } from "./general";
export declare function space<T>(value?: T): ObservableMega<T>;
export declare function state<T>(value?: T): Observable<T>;
export declare const computed: <T>(fn: Computation<T>) => Observable<T>;
export declare const from: <T extends Writer>(executor: T) => Parameters<Writer>[0];
//# sourceMappingURL=reactor.d.ts.map
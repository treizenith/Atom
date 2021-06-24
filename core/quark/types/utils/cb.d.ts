export default function cb<T extends Array<any>, U, N>(fn: (...as: T) => U, rs: (b: U, ...ab: T) => N): (...args: T) => N;
//# sourceMappingURL=cb.d.ts.map
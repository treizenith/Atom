import Atom, { OPT } from './index';
import type { SpecKey, specPromise, Tasks, Tuple, TupleList } from './general';
export default class queue {
    app: Atom;
    id: SpecKey;
    last: any;
    tasks: TupleList;
    active: Tuple;
    idle: boolean;
    history: any[];
    constructor(app: Atom, name?: SpecKey);
    push(order: Tasks | Tasks[], err?: Tasks | Tasks[], options?: OPT): Promise<any>;
    play(res: any, options?: OPT): specPromise;
    skip(res: any, options?: OPT): Promise<any>;
    next(...orders: Tasks[]): boolean;
}
//# sourceMappingURL=queue.d.ts.map
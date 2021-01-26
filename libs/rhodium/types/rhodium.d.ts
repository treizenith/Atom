import * as nats from 'ts-nats';
import * as utils from './utils';
import $gem from './gem';
import type Atom from '@treizenith/atom';
export default class Rhodium {
    App: Atom;
    constructor(App: Atom);
    nats: typeof nats;
    utils: typeof utils;
    gem: new (options?: import("./general").GemOption | undefined) => $gem;
}
//# sourceMappingURL=rhodium.d.ts.map
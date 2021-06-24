import type Rhodium from './rhodium';
import type { GemMsg, GemOption, Handler, SpecErr } from './general';
import type { Client, Subscription } from 'ts-nats';
export default class GEM {
    elem: Rhodium;
    native: Client;
    subs: Record<string | number, Subscription>;
    options: GemOption;
    gem: boolean;
    constructor(elem: Rhodium, options?: GemOption);
    run(): Promise<SpecErr | boolean>;
    follow(topic: string, handler: Handler): Promise<Subscription>;
    send(topic: string, data?: any, timeout?: number): Promise<GemMsg>;
    publish(topic: string, data?: any, reply?: string): this;
    subscribe(topic: string, handler: Handler): Promise<Subscription>;
}
//# sourceMappingURL=gem.d.ts.map
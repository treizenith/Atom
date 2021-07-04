import type Atom from '@treizenith/atom';
import type { Config } from './general';
import Li from "./li";
export default function LithiumWrapper(config: Config): (instance: Atom, atom: typeof Atom) => {
    $li: Li;
};
export * from "./general";
//# sourceMappingURL=iife.d.ts.map
import type Atom from '@treizenith/atom';
import type { Config } from './general';
import Li from "./li";
export default function LithiumWrapper(config: Config): (instance: Atom, atom: typeof Atom) => {
    $li: Li;
};
//# sourceMappingURL=index.d.ts.map
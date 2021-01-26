import type { Handler } from './general';
import type Atom from './index';
export default function (xs: Atom['xs']): {
    Observable: {
        new ({ start, end, }?: {
            start?: Handler | undefined;
            end?: Handler | undefined;
        }): {
            native: ReturnType<Atom['xs']['makeSubject']>;
            pipe: ReturnType<Atom['xs']['pipe']>;
            next: (data: unknown) => void;
            subscribe(handler: Parameters<Atom['xs']['subscribe']>[0]): () => void;
            end(): void;
        };
    };
};
//# sourceMappingURL=xss.d.ts.map
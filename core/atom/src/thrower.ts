import type { ThrowerOpt } from './general';
import Atom from './index';

let defs: ThrowerOpt = {};
export default {
	make(message?: string, options: ThrowerOpt = defs, strict?: boolean) {
		let err = Object.assign(new Error(message), options, {
			err: Atom.err,
		});

		if (strict) {
			throw err;
		}

		return err;
	},

	isErr(a: any) {
		return Atom.err === a;
	},
};

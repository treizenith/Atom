import type Atom from '@treizenith/atom';
import Palladium from './palladium';
import Rhodium from '@treizenith/rhodium';
import type { RH } from './general';

export default function AtomPalladium(v: Atom) {
	let instance!: RH;
	if ('rh' in v) {
		instance = v as RH;
	} else {
		instance = v.plug(Rhodium);
	}

	return {
		pd: new Palladium(instance),
		rh: instance.rh,
	};
}

import type Atom from '@treizenith/atom';
import Rhodium from './rhodium';

export default function AtomRhodium(instance: Atom) {
	return {
		rh: new Rhodium(instance),
	};
}

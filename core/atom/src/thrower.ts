import Atom from './index';

export interface THROWER {
	err?: Error;
}

export default function thrower(
	arr: Array<any>,
	hard?: boolean,
	options?: object,
): THROWER {
	if (!Atom._.is.arr(arr)) {
		return thrower(
			['$thrower ERR', 'first argument must be an array !'],
			true,
		);
	} else if (!Atom._.is.bool(hard)) {
		return thrower(
			['$thrower ERR', 'second argument must be an boolean ! '],
			true,
		);
	} else if (options && !Atom._.is.obj(options)) {
		return thrower(
			['$thrower ERR', 'third argument must be an object ?'],
			true,
		);
	}

	arr.unshift(Atom.tag);
	let err = new Error(arr.join(' \n'));

	if (hard) {
		throw err;
	} else {
		return {
			err,
		};
	}
}

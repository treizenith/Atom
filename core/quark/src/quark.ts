import is from './is/index';
import utils from './utils/index';
import obj from './obj/index';
import $big from 'big.js';

export default class quark {
	static n: string = 'quark';
	static version = {
		full: '1.4.0',
		major: 1,
		minor: 4,
		bug: 0,
	};

	static big = $big;

	static is = is;
	static u = utils;
	static obj = obj;
}

import Atom from '../../core/atom/';
import Rhodium from '../../libs/rhodium/';

let elem = new Atom().plug(Rhodium);

(async () => {
	let cardinal = new elem.rh.gem();
	await cardinal.run();

	let service = new elem.rh.gem();
	await service.run();

	cardinal.follow('data', (_f, data) => {
		console.log('in', data);
		return 'hüğ';
	});

	let res = await service.send('data', 'bruh');

	console.log(res);
})();
console.log(elem);

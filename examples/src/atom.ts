import Atom from '../../core/atom/';

let { xss } = new Atom();

let sub = new xss.Observable({});

let unsub = sub.subscribe((val) => {
	console.log(val);
});

sub.next('E?');
sub.next('X?');
sub.next('ALICE');

unsub();

import Atom from '../../core/atom/';
import Palladium from '../../libs/palladium/';
import Rhodium from '../../libs/rhodium/';

let elem = new Atom().plug(Rhodium).plug(Palladium);
console.log(elem);

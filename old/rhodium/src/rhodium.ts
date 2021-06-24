import * as nats from 'ts-nats';

import * as utils from './utils';

import $gem from './gem';
// import $service from "./service";
// import $cardinal from "./cardinal";

import type Atom from '@treizenith/atom';

export default class Rhodium {
	constructor(public App: Atom) {}

	nats = nats;
	utils = utils;

	gem = $gem.bind(null, this);
	// service = $service.bind(null, this);
	// cardinal = $cardinal.bind(null, this);
}

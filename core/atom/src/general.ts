import type Atom from '.';

export interface ThrowerOpt {
	code?: number | string;
	target?: string;
	status?: string;
	data?: any;
	err?: boolean | null;
}

export type Handler = () => any;

export type XS = Atom['xs'];
export type PIPE = XS['pipe'];
export type PIPE_PARAMS = Parameters<PIPE>;
export type SOURCE = PIPE_PARAMS[0];
export type UNARYFN = PIPE_PARAMS[1];

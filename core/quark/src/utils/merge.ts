import { merge as $merge } from '@corex/deepmerge';

type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;

type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;

type MergeTwoObjects<T, U> = Partial<GetObjDifferentKeys<T, U>> &
	{ [K in keyof GetObjSameKeys<T, U>]: DeepMergeTwoTypes<T[K], U[K]> };

export type DeepMergeTwoTypes<T, U> = [T, U] extends [
	(infer TItem)[],
	(infer UItem)[],
]
	? DeepMergeTwoTypes<TItem, UItem>[]
	: [T, U] extends [{ [key: string]: unknown }, { [key: string]: unknown }]
	? MergeTwoObjects<T, U>
	: [T, U] extends [
			{ [key: string]: unknown } | undefined,
			{ [key: string]: unknown } | undefined,
	  ]
	? MergeTwoObjects<NonNullable<T>, NonNullable<U>> | undefined
	: T | U;

type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;

type Length<T extends any[]> = T['length'];

type Tail<T extends any[]> = T extends [any, ...infer TT] ? TT : [];

type DeepMergeResult<CurrResult, Objects extends any[]> = {
	0: CurrResult;
	1: DeepMergeResult<
		DeepMergeTwoTypes<CurrResult, Head<Objects>>,
		Tail<Objects>
	>;
}[Length<Objects> extends 0 ? 0 : 1];

type DeepMergeMany<Args extends any[]> = Args extends [
	infer Item1,
	...infer Rest
]
	? DeepMergeResult<Item1, Rest>
	: never;

/**
 * merges all the objects.
 *
 * **Note:** KEEPS TYPES SAFE
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} values values to merge.
 * @returns {DEEPMERGED} Returns merged data.
 * @example
 *
 * // => NO EXAMPLE
 */
export default function merge<T extends any[]>(...args: T): DeepMergeMany<T> {
	return $merge(args) as any;
}

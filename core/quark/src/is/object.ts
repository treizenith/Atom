/**
 * Checks if `value` is object.
 *
 * **Note:** strict object type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object, else `false`.
 * @example
 * ```ts
 * _.is.obj({});
 * // => true
 *
 * _.is.obj("alice");
 * // => false
 * ```
 */

export default function obj(value?: unknown): value is object {
	return (
		!!value &&
		typeof value == 'object' &&
		// @ts-ignore
		value.constructor == Object
	);
	// return $pureType.call(value) == '[object Object]';
}

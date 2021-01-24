/**
 * returns the type absolute type.
 *
 * **Note:** returns strict type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {string} Returns type of value.
 * @example
 * ```ts
 * _.utils.pure("alice");
 * // => [object String]
 *
 * _.utils.pure(Promise.resolve());
 * // => [object Promise]
 * ```
 */

export default function pure(value: unknown): string {
	return Object.prototype.toString.call(value);
}

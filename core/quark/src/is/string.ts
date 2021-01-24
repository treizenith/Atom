/**
 * Checks if `value` is string.
 *
 * **Note:** strict string type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {unknown} value The value to check.
 * @returns {boolean} Returns `true` if `value` is string, else `false`.
 * @example
 * ```ts
 * _.is.str("alice");
 * // => true
 *
 * _.is.str(true);
 * // => false
 * ```
 */

export default function str(value?: unknown): value is string {
	return typeof value == 'string';
}

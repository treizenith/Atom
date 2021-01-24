import pure from '../utils/pure';

/**
 * Checks if `value` is regexp.
 *
 * **Note:** strict regexp type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is regexp, else `false`.
 * @example
 * ```ts
 * _.is.reg(/[0-9]/);
 * // => true
 *
 * _.is.reg("alice");
 * // => false
 * ```
 */
export default function reg(value?: unknown): value is RegExp {
	return pure(value) == '[object RegExp]';
}

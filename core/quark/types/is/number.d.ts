/**
 * Checks if `value` is number.
 *
 * **Note:** strict number type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is number, else `false`.
 * @example
 * ```ts
 * _.is.num(10);
 * // => true
 *
 * _.is.num("alice");
 * // => false
 * ```
 */
export default function num(value?: unknown): value is number;
//# sourceMappingURL=number.d.ts.map
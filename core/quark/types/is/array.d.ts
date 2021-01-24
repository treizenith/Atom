/**
 * Checks if `value` is array.
 *
 * **Note:** strict array type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array, else `false`.
 * @example
 * ```ts
 * _.is.arr([true]);
 * // => true
 *
 * _.is.arr("alice");
 * // => false
 * ```
 */
export default function arr(value?: unknown): value is any[];
//# sourceMappingURL=array.d.ts.map
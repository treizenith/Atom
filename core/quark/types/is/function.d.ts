/**
 * Checks if `value` is function.
 *
 * **Note:** strict function type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is function, else `false`.
 * @example
 * ```ts
 * _.is.func(() => {});
 * // => true
 *
 * _.is.func("alice");
 * // => false
 * ```
 */
export default function func(value?: unknown): value is Function;
//# sourceMappingURL=function.d.ts.map
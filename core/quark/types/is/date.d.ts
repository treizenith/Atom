/**
 * Checks if `value` is date.
 *
 * **Note:** strict date type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is date, else `false`.
 * @example
 * ```ts
 * _.is.date(new Date());
 * // => true
 *
 * _.is.date("alice");
 * // => false
 * ```
 */
export default function date(value?: unknown): value is Date;
//# sourceMappingURL=date.d.ts.map
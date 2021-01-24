/**
 * Checks if `value` is null.
 *
 * **Note:** strict null type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is null, else `false`.
 * @example
 * ```ts
 * _.is.null(null);
 * // => true
 *
 * _.is.null("alice");
 * // => false
 * ```
 */
export default function nul(value?: unknown): value is null;
//# sourceMappingURL=null.d.ts.map
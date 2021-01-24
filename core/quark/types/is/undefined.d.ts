/**
 * Checks if `value` is undefined.
 *
 * **Note:** strict undefined type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {unknown} value The value to check.
 * @returns {boolean} Returns `true` if `value` is undefined, else `false`.
 * @example
 * ```ts
 * _.is.und(undefined);
 * // => true
 *
 * _.is.und(true);
 * // => false
 * ```
 */
export default function und(value?: unknown): value is undefined;
//# sourceMappingURL=undefined.d.ts.map
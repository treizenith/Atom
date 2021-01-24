/**
 * Checks if `value` is promise.
 *
 * **Note:** strict promise type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {unknown} value The value to check.
 * @returns {boolean} Returns `true` if `value` is promise, else `false`.
 * @example
 * ```ts
 * _.is.prom(Promise.resolve());
 * // => true
 *
 * _.is.prom(true);
 * // => false
 * ```
 */
export default function prom(value?: unknown): value is Promise<unknown>;
//# sourceMappingURL=promise.d.ts.map
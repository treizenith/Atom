/*!
 * @treizenith/atom v2.0.0
 * (c) giveerr <givessomeerr.e@gmail.com>
 * Released under the MIT License.
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

/*!
 * @treizenith/quark v1.5.4
 * (c) giveerr <givessomeerr.e@gmail.com>
 * Released under the MIT License.
 */

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
function arr(value) {
    return Array.isArray(value);
}

/**
 * Checks if `value` is boolean.
 *
 * **Note:** strict boolean type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is boolean, else `false`.
 * @example
 * ```ts
 * _.is.bool(true);
 * // => true
 *
 * _.is.bool("alice");
 * // => false
 * ```
 */
function bool(value) {
    return typeof value === 'boolean';
}

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
function date(value) {
    return value instanceof Date;
}

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
function func(value) {
    // @ts-ignore
    return !!(value && value.constructor && value.call && value.apply);
}

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
function nul(value) {
    return value === null;
}

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
function num(value) {
    // @ts-ignore
    return !isNaN(value) && typeof value === 'number';
}

/**
 * Checks if `value` is object.
 *
 * **Note:** strict object type !
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object, else `false`.
 * @example
 * ```ts
 * _.is.obj({});
 * // => true
 *
 * _.is.obj("alice");
 * // => false
 * ```
 */
function obj(value) {
    return (!!value &&
        typeof value == 'object' &&
        // @ts-ignore
        value.constructor == Object);
    // return $pureType.call(value) == '[object Object]';
}

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
function pure(value) {
    return Object.prototype.toString.call(value);
}

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
function prom(value) {
    // @ts-ignore
    return value && pure(value) === '[object Promise]';
}

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
function reg(value) {
    return pure(value) == '[object RegExp]';
}

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
function str(value) {
    return typeof value == 'string';
}

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
function und(value) {
    return value === void 0;
}

var is = {
    arr,
    bool,
    date,
    func,
    nul,
    num,
    obj,
    prom,
    reg,
    str,
    und,
};

/**
 * returns the type absolute type.
 *
 * **Note:** returns strict type SLICED !!!
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} value The value to check.
 * @returns {string} Returns type of value.
 * @example
 * ```ts
 * _.is.utils.type("alice");
 * // => String
 *
 * _.is.utils.type(Promise.resolve());
 * // => Promise
 * ```
 */
function type(value) {
    return pure(value).slice(8, -1);
}

var combineMerge = (prevArr, currArr) => {
    return [...new Set([...prevArr, ...currArr])];
};

var overwriteMerge = (_, currArr) => currArr;

const getMergeFn = (type) => {
    switch (type) {
        case 'overwrite':
            return overwriteMerge;
        case 'combine':
        default:
            return combineMerge;
    }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var isObject = (obj) => {
    if (typeof obj === 'object' && obj !== null) {
        if (typeof Object.getPrototypeOf === 'function') {
            const prototype = Object.getPrototypeOf(obj);
            return prototype === Object.prototype || prototype === null;
        }
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    return false;
};

const withDefaultOptions = (options) => {
    return Object.assign({ arrayMergeType: 'combine', arrayMerge: getMergeFn(options ? options.arrayMergeType : 'combine') }, options);
};
const merge = (objects, options) => {
    const opts = withDefaultOptions(options);
    return objects.reduce((prev, curr) => {
        Object.keys(curr).forEach((key) => {
            if (Array.isArray(prev[key]) && Array.isArray(curr[key])) {
                if (opts && opts.arrayMerge) {
                    prev[key] = opts.arrayMerge(prev[key], curr[key]);
                }
            }
            else if (isObject(prev[key]) && isObject(curr[key])) {
                prev[key] = merge([prev[key], curr[key]], opts);
            }
            else {
                prev[key] = curr[key];
            }
        });
        return prev;
    }, {});
};

/**
 * merges all the objects.
 *
 * **Note:** KEEPS TYPES SAFE
 * @asMemberOf quark
 * @since 1.0.0
 * @category is
 * @param {*} values values to merge.
 * @returns {DEEPMERGED} Returns merged data.
 * @example
 *
 * // => NO EXAMPLE
 */
function merge$1(...args) {
    return merge(args);
}

var utils = {
    pure,
    type,
    merge: merge$1,
};

/**
 * gets nested key from target
 *
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @param {unknown} def The default value.
 * @returns {any} Returns `value` if path exist, else `undefined`.
 * @example
 * ```ts
 * let obj = {
 *  user: {
 *   name: "alice",
 *   surname: "zuberg"
 *  },
 *  items: ["sword", "armor"]
 * }
 *
 * _.obj.get(obj, "user.name");
 * // => "alice"
 *
 * _.obj.get(obj, "user.age", 19);
 * // => "sword"
 * ```
 */
function get(target, path, def) {
    if (!obj(target) && !arr(target))
        return target;
    if (str(path)) {
        path = path.toString().match(/[^.[\]]+/g) || [];
    }
    return path.reduce((xs, x, _i, arr) => xs && xs[x] ? xs[x] : (arr.splice(1), def), target);
}

/**
 * sets nested key and value to target
 *
 * if any key (i) of the nested path doesnt exist on the target:
 * quark will create object or an array as default with these rules
 * if the key after that comes with our lost key (i+1) is a number then default will be an array
 * else the default will be an object
 *
 *
 * **Note:** mutates the target
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @param {unknown} value The default value.
 * @returns {any} Returns mutated target.
 * @example
 * ```ts
 * // rule 1
 * _.obj.set({}, "some.property", 15);
 *
 * // {
 * //  some: {
 * //   property: 15
 * //  }
 * // }
 *
 * // rule 2
 * _.obj.set({}, "some.0", 15);
 *
 * // {
 * //  some: [15]
 * // }
 *
 * let obj = {}
 *
 * _.obj.set(obj, "user", 5);
 * // {
 * //  user: 5
 * // }
 *
 * _.obj.set(obj, "user");
 * // {
 * //  user: undefined
 * // }
 * ```
 */
function set(obj$1, path, value) {
    if (!obj(obj$1) && !arr(obj$1))
        return obj$1;
    if (str(path)) {
        path = path.toString().match(/[^.[\]]+/g) || [];
    }
    path.slice(0, -1).reduce((a, c, i) => {
        if (obj(a[c])) {
            return a[c];
        }
        else {
            if (Math.abs(path[i + 1]) >> 0 === +path[i + 1]) {
                return (a[c] = []);
            }
            else {
                return (a[c] = {});
            }
        }
    }, obj$1)[path[path.length - 1]] = value;
    return obj$1;
}

/**
 * looks for path is it exist inside target.
 *
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @returns {boolean} Returns `true` if path exist, else `false`.
 * @example
 * ```ts
 * let obj = {
 *  user: {
 *   name: "alice",
 *   surname: "zuberg"
 *  },
 *  items: ["sword", "armor"]
 * }
 *
 * _.obj.has(obj, "user.name");
 * // => true
 *
 * _.obj.has(obj, "items.0");
 * // => true
 *
 * _.obj.has(obj, "user.age");
 * // => false
 * ```
 */
function has(target, path) {
    if (!obj(target) && !arr(target))
        return target;
    if (str(path)) {
        path = path.toString().match(/[^.[\]]+/g) || [];
    }
    return path.reduce((xs, x, i, arr) => xs && xs[x]
        ? i == arr.length - 1 && Reflect.has(xs, x)
            ? true
            : xs[x]
        : (arr.splice(1), false), target);
}

/**
 * delete the key from target.
 *
 * **Note:** mutates the target
 * @asMemberOf quark
 * @since 1.0.0
 * @category obj
 * @param {object|any[]} target The target.
 * @param {string|any[]} path The path of nested key.
 * @returns {any} Returns `deleted value` if path exist, else `undefined`.
 * @example
 * ```ts
 * let obj = {
 *  user: {
 *   name: "alice",
 *   surname: "zuberg"
 *  },
 *  items: ["sword", "armor"]
 * }
 *
 * _.obj.del(obj, "user.name");
 * // {
 * //  user: {
 * //   surname: "zuberg"
 * //  },
 * //  items: ["sword", "armor"]
 * // }
 *
 * _.obj.del(obj, "items.0");
 * // {
 * //  user: {
 * //   name: "alice",
 * //   surname: "zuberg"
 * //  },
 * //  items: [__emty__, "armor"]
 * // }
 * ```
 */
function del(target, path) {
    if (!obj(target) && !arr(target))
        return target;
    if (str(path)) {
        path = path.toString().match(/[^.[\]]+/g) || [];
    }
    return path.reduce((xs, x, i, arr) => xs && xs[x]
        ? i == arr.length - 1 && Reflect.has(xs, x)
            ? (() => {
                let data = xs[x];
                Reflect.deleteProperty(xs, x);
                return data;
            })()
            : xs[x]
        : (arr.splice(1), false), target);
}

var obj$1 = {
    get,
    set,
    has,
    del,
};

/*
 *  big.js v6.0.3
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2020 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */


/************************************** EDITABLE DEFAULTS *****************************************/


  // The default values below must be integers within the stated ranges.

  /*
   * The maximum number of decimal places (DP) of the results of operations involving division:
   * div and sqrt, and pow with negative exponents.
   */
var DP = 20,          // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,             // 0, 1, 2 or 3

  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,       // 0 to 1000000

  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,    // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,            // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */
  PE = 21,            // 0 to 1000000

  /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */
  STRICT = false,     // true or false


/**************************************************************************************************/


  // Error messages.
  NAME = '[big.js] ',
  INVALID = NAME + 'Invalid ',
  INVALID_DP = INVALID + 'decimal places',
  INVALID_RM = INVALID + 'rounding mode',
  DIV_BY_ZERO = NAME + 'Division by zero',

  // The shared prototype object.
  P = {},
  UNDEFINED = void 0,
  NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;


/*
 * Create and return a Big constructor.
 */
function _Big_() {

  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this;

    // Enable constructor usage without new.
    if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

    // Duplicate.
    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== 'string') {
        if (Big.strict === true) {
          throw TypeError(INVALID + 'number');
        }

        // Minus zero?
        n = n === 0 && 1 / n < 0 ? '-0' : String(n);
      }

      parse(x, n);
    }

    // Retain a reference to this Big constructor.
    // Shadow Big.prototype.constructor which points to Object.
    x.constructor = Big;
  }

  Big.prototype = P;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.strict = STRICT;

  return Big;
}


/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
  var e, i, nl;

  if (!NUMERIC.test(n)) {
    throw Error(INVALID + 'number');
  }

  // Determine sign.
  x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

  // Decimal point?
  if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

  // Exponential form?
  if ((i = n.search(/e/i)) > 0) {

    // Determine exponent.
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {

    // Integer.
    e = n.length;
  }

  nl = n.length;

  // Determine leading zeros.
  for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

  if (i == nl) {

    // Zero.
    x.c = [x.e = 0];
  } else {

    // Determine trailing zeros.
    for (; nl > 0 && n.charAt(--nl) == '0';);
    x.e = e - i - 1;
    x.c = [];

    // Convert string to array of digits without leading/trailing zeros.
    for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
  }

  return x;
}


/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, sd, rm, more) {
  var xc = x.c;

  if (rm === UNDEFINED) rm = Big.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }

  if (sd < 1) {
    more =
      rm === 3 && (more || !!xc[0]) || sd === 0 && (
      rm === 1 && xc[0] >= 5 ||
      rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED))
    );

    xc.length = 1;

    if (more) {

      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {

      // Zero.
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {

    // xc[sd] is the digit after the digit that may be rounded up.
    more =
      rm === 1 && xc[sd] >= 5 ||
      rm === 2 && (xc[sd] > 5 || xc[sd] === 5 &&
        (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) ||
      rm === 3 && (more || !!xc[0]);

    // Remove any digits after the required precision.
    xc.length = sd--;

    // Round up?
    if (more) {

      // Rounding up may mean the previous digit has to be rounded up.
      for (; ++xc[sd] > 9;) {
        xc[sd] = 0;
        if (!sd--) {
          ++x.e;
          xc.unshift(1);
        }
      }
    }

    // Remove trailing zeros.
    for (sd = xc.length; !xc[--sd];) xc.pop();
  }

  return x;
}


/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */
function stringify(x, doExponential, isNonzero) {
  var e = x.e,
    s = x.c.join(''),
    n = s.length;

  // Exponential notation?
  if (doExponential) {
    s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

  // Normal notation.
  } else if (e < 0) {
    for (; ++e;) s = '0' + s;
    s = '0.' + s;
  } else if (e > 0) {
    if (++e > n) {
      for (e -= n; e--;) s += '0';
    } else if (e < n) {
      s = s.slice(0, e) + '.' + s.slice(e);
    }
  } else if (n > 1) {
    s = s.charAt(0) + '.' + s.slice(1);
  }

  return x.s < 0 && isNonzero ? '-' + s : s;
}


// Prototype/instance methods


/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};


/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */
P.cmp = function (y) {
  var isneg,
    x = this,
    xc = x.c,
    yc = (y = new x.constructor(y)).c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;

  isneg = i < 0;

  // Compare exponents.
  if (k != l) return k > l ^ isneg ? 1 : -1;

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = -1; ++i < j;) {
    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  }

  // Compare lengths.
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};


/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
  var x = this,
    Big = x.constructor,
    a = x.c,                  // dividend
    b = (y = new Big(y)).c,   // divisor
    k = x.s == y.s ? 1 : -1,
    dp = Big.DP;

  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }

  // Divisor is zero?
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }

  // Dividend is 0? Return +-0.
  if (!a[0]) {
    y.s = k;
    y.c = [y.e = 0];
    return y;
  }

  var bl, bt, n, cmp, ri,
    bz = b.slice(),
    ai = bl = b.length,
    al = a.length,
    r = a.slice(0, bl),   // remainder
    rl = r.length,
    q = y,                // quotient
    qc = q.c = [],
    qi = 0,
    p = dp + (q.e = x.e - y.e) + 1;    // precision of the result

  q.s = k;
  k = p < 0 ? 0 : p;

  // Create version of divisor with leading zero.
  bz.unshift(0);

  // Add zeros to make remainder as long as divisor.
  for (; rl++ < bl;) r.push(0);

  do {

    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {

      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }

      // If divisor < remainder, subtract divisor from remainder.
      if (cmp < 0) {

        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri];) r[ri] = 9;
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }

        for (; !r[0];) r.shift();
      } else {
        break;
      }
    }

    // Add the digit n to the result array.
    qc[qi++] = cmp ? n : ++n;

    // Update the remainder.
    if (r[0] && cmp) r[rl] = a[ai] || 0;
    else r = [a[ai]];

  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

  // Leading zero? Do not remove if result is simply zero (qi == 1).
  if (!qc[0] && qi != 1) {

    // There can't be more than one zero.
    qc.shift();
    q.e--;
    p--;
  }

  // Round?
  if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);

  return q;
};


/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
  return this.cmp(y) === 0;
};


/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
  return this.cmp(y) > 0;
};


/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
  return this.cmp(y) > -1;
};


/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
  return this.cmp(y) < 0;
};


/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
  return this.cmp(y) < 1;
};


/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
  var i, j, t, xlty,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }

  var xc = x.c.slice(),
    xe = x.e,
    yc = y.c,
    ye = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b;
    } else if (xc[0]) {
      y = new Big(x);
    } else {
      y.s = 1;
    }
    return y;
  }

  // Determine which is the bigger number. Prepend zeros to equalise exponents.
  if (a = xe - ye) {

    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }

    t.reverse();
    for (b = a; b--;) t.push(0);
    t.reverse();
  } else {

    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;

    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }

  // x < y? Point xc to the array of the bigger number.
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }

  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */
  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

  // Subtract yc from xc.
  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) xc[i] = 9;
      --xc[i];
      xc[j] += 10;
    }

    xc[j] -= yc[j];
  }

  // Remove trailing zeros.
  for (; xc[--b] === 0;) xc.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }

  if (!xc[0]) {

    // n - n = +0
    y.s = 1;

    // Result must be zero.
    xc = [ye = 0];
  }

  y.c = xc;
  y.e = ye;

  return y;
};


/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
  var ygtx,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }

  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;

  if (ygtx) return new Big(x);

  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;

  return this.minus(x.times(y));
};


/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
  var e, k, t,
    x = this,
    Big = x.constructor;

  y = new Big(y);

  // Signs differ?
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }

  var xe = x.e,
    xc = x.c,
    ye = y.e,
    yc = y.c;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big(x);
      } else {
        y.s = x.s;
      }
    }
    return y;
  }

  xc = xc.slice();

  // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.
  if (e = xe - ye) {
    if (e > 0) {
      ye = xe;
      t = yc;
    } else {
      e = -e;
      t = xc;
    }

    t.reverse();
    for (; e--;) t.push(0);
    t.reverse();
  }

  // Point xc to the longer array.
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }

  e = yc.length;

  // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
  for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;

  // No need to check for zero, as +x + +y != 0 && -x + -y != 0

  if (k) {
    xc.unshift(k);
    ++ye;
  }

  // Remove trailing zeros.
  for (e = xc.length; xc[--e] === 0;) xc.pop();

  y.c = xc;
  y.e = ye;

  return y;
};


/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
  var x = this,
    one = new x.constructor('1'),
    y = one,
    isneg = n < 0;

  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID + 'exponent');
  }

  if (isneg) n = -n;

  for (;;) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }

  return isneg ? one.div(y) : y;
};


/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.prec = function (sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + 'precision');
  }
  return round(new this.constructor(this), sd, rm);
};


/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.round = function (dp, rm) {
  if (dp === UNDEFINED) dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};


/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
  var r, c, t,
    x = this,
    Big = x.constructor,
    s = x.s,
    e = x.e,
    half = new Big('0.5');

  // Zero?
  if (!x.c[0]) return new Big(x);

  // Negative?
  if (s < 0) {
    throw Error(NAME + 'No square root');
  }

  // Estimate.
  s = Math.sqrt(x + '');

  // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
  if (s === 0 || s === 1 / 0) {
    c = x.c.join('');
    if (!(c.length + e & 1)) c += '0';
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
  } else {
    r = new Big(s + '');
  }

  e = r.e + (Big.DP += 4);

  // Newton-Raphson iteration.
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

  return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};


/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) c[j] = 0;

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {

      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }

    c[j] = b;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) ++y.e;
  else c.shift();

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) c.pop();
  y.c = c;

  return y;
};


/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toExponential = function (dp, rm) {
  var x = this,
    n = x.c[0];

  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp;) x.c.push(0);
  }

  return stringify(x, true, !!n);
};


/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp, rm) {
  var x = this,
    n = x.c[0];

  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);

    // x.e may have changed if the value is rounded up.
    for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
  }

  return stringify(x, false, !!n);
};


/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P.toJSON = P.toString = function () {
  var x = this,
    Big = x.constructor;
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};


/*
 * Return the value of this Big as a primitve number.
 */
P.toNumber = function () {
  var n = Number(stringify(this, true, true));
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + 'Imprecise conversion');
  }
  return n;
};


/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toPrecision = function (sd, rm) {
  var x = this,
    Big = x.constructor,
    n = x.c[0];

  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + 'precision');
    }
    x = round(new Big(x), sd, rm);
    for (; x.c.length < sd;) x.c.push(0);
  }

  return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};


/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = function () {
  var x = this,
    Big = x.constructor;
  if (Big.strict === true) {
    throw Error(NAME + 'valueOf disallowed');
  }
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};


// Export


var Big = _Big_();

class quark {
}
quark.n = 'quark';
quark.version = {
    full: '1.4.0',
    major: 1,
    minor: 4,
    bug: 0,
};
quark.big = Big;
quark.is = is;
quark.u = utils;
quark.obj = obj$1;

function l(a, b) {
  b.tag = a;
  return b;
}

function m() {}

function p(a) {
  return function (b) {
    var c = a.length;
    let d = !1,
      e = !1,
      f = !1,
      g = 0;
    b(
      l(0, [
        function (h) {
          if (h) {
            d = !0;
          } else if (e) {
            f = !0;
          } else {
            for (e = f = !0; f && !d; ) {
              g < c ? ((h = a[g]), (g = (g + 1) | 0), (f = !1), b(l(1, [h]))) : ((d = !0), b(0));
            }
            e = !1;
          }
        },
      ])
    );
  };
}

function r() {}

function t(a) {
  a(0);
}

function u(a) {
  let b = !1;
  a(
    l(0, [
      function (c) {
        c ? (b = !0) : b || a(0);
      },
    ])
  );
}

function w(a) {
  if (void 0 === a) {
    return ((a = [v, 0]).tag = 256), a;
  }
  if (null === a || a[0] !== v) {
    return a;
  }
  (a = [v, (a[1] + 1) | 0]).tag = 256;
  return a;
}

function x(a) {
  if (null === a || a[0] !== v) {
    return a;
  }
  if (0 !== (a = a[1])) {
    return [v, (a - 1) | 0];
  }
}

function z(a) {
  return function (b) {
    return function (c) {
      function d(b) {
        'number' == typeof b
          ? k &&
            ((k = !1),
            void 0 !== (b = e.shift())
              ? ((b = a(x(b))), (k = !0), b(d))
              : q
              ? c(0)
              : g || ((g = !0), f(0)))
          : b.tag
          ? k && (c(b), n ? (n = !1) : h(0))
          : ((h = b = b[0]), (n = !1), b(0));
      }
      let e = [],
        f = m,
        g = !1,
        h = m,
        k = !1,
        n = !1,
        q = !1;
      b(function (b) {
        'number' == typeof b
          ? q || ((q = !0), k || 0 !== e.length || c(0))
          : b.tag
          ? q || ((b = b[0]), (g = !1), k ? e.push(b) : ((b = a(b)), (k = !0), b(d)))
          : (f = b[0]);
      });
      c(
        l(0, [
          function (c) {
            if (c) {
              if ((q || ((q = !0), f(1)), k)) {
                return (k = !1), h(1);
              }
            } else {
              q || g || ((g = !0), f(0)), k && !n && ((n = !0), h(0));
            }
          },
        ])
      );
    };
  };
}

function A(a) {
  return a;
}

function B(a) {
  return a;
}

function C(a) {
  return a(0);
}

function D(a) {
  return function (b) {
    return function (c) {
      let e = m,
        f = !1,
        g = [],
        h = !1;
      b(function (b) {
        'number' == typeof b
          ? h || ((h = !0), 0 === g.length && c(0))
          : b.tag
          ? h ||
            ((f = !1),
            (function (a) {
              function b(a) {
                'number' == typeof a
                  ? 0 !== g.length &&
                    ((g = g.filter(d)),
                    (a = 0 === g.length),
                    h && a ? c(0) : !f && a && ((f = !0), e(0)))
                  : a.tag
                  ? 0 !== g.length && (c(l(1, [a[0]])), k(0))
                  : ((k = a = a[0]), (g = g.concat(a)), a(0));
              }
              function d(a) {
                return a !== k;
              }
              let k = m;
              1 === a.length ? a(b) : a.bind(null, b);
            })(a(b[0])),
            f || ((f = !0), e(0)))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            a
              ? (h || ((h = !0), e(a)),
                g.forEach(function (c) {
                  return c(a);
                }),
                (g = []))
              : (f || h ? (f = !1) : ((f = !0), e(0)), g.forEach(C));
          },
        ])
      );
    };
  };
}

function E(a) {
  return a;
}

function F(a) {
  return a;
}

function G(a) {
  return D(F)(a);
}

function H(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (e) {
        if ('number' == typeof e) {
          d || ((d = !0), c(e));
        } else if (e.tag) {
          d || (a(e[0]), c(e));
        } else {
          var g = e[0];
          c(
            l(0, [
              function (a) {
                if (!d) {
                  return a && (d = !0), g(a);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function J(a) {
  a(0);
}

function K(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        h &&
          ('number' == typeof a
            ? ((h = !1), n ? c(a) : f || ((f = !0), e(0)))
            : a.tag
            ? (c(a), k ? (k = !1) : g(0))
            : ((g = a = a[0]), (k = !1), a(0)));
      }
      let e = m,
        f = !1,
        g = m,
        h = !1,
        k = !1,
        n = !1;
      b(function (b) {
        'number' == typeof b
          ? n || ((n = !0), h || c(0))
          : b.tag
          ? n ||
            (h && (g(1), (g = m)), f ? (f = !1) : ((f = !0), e(0)), (b = a(b[0])), (h = !0), b(d))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            if (a) {
              if ((n || ((n = !0), e(1)), h)) {
                return (h = !1), g(1);
              }
            } else {
              n || f || ((f = !0), e(0)), h && !k && ((k = !0), g(0));
            }
          },
        ])
      );
    };
  };
}

function L(a) {
  return a;
}

function M(a) {
  return function (b) {
    return function (c) {
      let d = [],
        e = m;
      return b(function (b) {
        'number' == typeof b
          ? p(d)(c)
          : b.tag
          ? (d.length >= a && 0 < a && d.shift(), d.push(b[0]), e(0))
          : ((b = b[0]), 0 >= a ? (b(1), u(c)) : ((e = b), b(0)));
      });
    };
  };
}

function N(a) {
  return function (b) {
    let c = m,
      d = !1;
    b(function (e) {
      'number' == typeof e ? (d = !0) : e.tag ? d || (a(e[0]), c(0)) : ((c = e = e[0]), e(0));
    });
    return {
      unsubscribe: function () {
        if (!d) {
          return (d = !0), c(1);
        }
      },
    };
  };
}

function O() {}

function Q() {}

function R() {}

function S() {}

function buffer$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? k || ((k = !0), f(1), 0 < e.length && c(l(1, [e])), c(0))
          : a.tag
          ? !k && 0 < e.length && ((a = e), (e = []), c(l(1, [a])))
          : (g = a[0]);
      }
      let e = [],
        f = m,
        g = m,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? k || ((k = !0), g(1), 0 < e.length && c(l(1, [e])), c(0))
          : b.tag
          ? k || (e.push(b[0]), h ? (h = !1) : ((h = !0), f(0), g(0)))
          : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                return (k = !0), f(1), g(1);
              }
              if (!h) {
                return (h = !0), f(0), g(0);
              }
            }
          },
        ])
      );
    };
  };
}

function combine$1(a, b) {
  return (function (a, b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = void 0,
        h = !1,
        k = 0,
        n = !1;
      a(function (a) {
        var b = g;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((f = w(a)), (h = !1), c(l(1, [[a, x(b)]])))
              : ((f = w(a)), h ? (h = !1) : e(0)))
          : (d = a[0]);
      });
      b(function (a) {
        var b = f;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((g = w(a)), (h = !1), c(l(1, [[x(b), a]])))
              : ((g = w(a)), h ? (h = !1) : d(0)))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (c) {
            if (!n) {
              if (c) {
                return (n = !0), d(1), e(1);
              }
              if (!h) {
                return (h = !0), d(c), e(c);
              }
            }
          },
        ])
      );
    };
  })(a, b);
}

function concat$1(a) {
  return z(B)(p(a));
}

function concatAll$1(a) {
  return z(A)(a);
}

function debounce$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        var a = e;
        void 0 !== a && ((e = void 0), clearTimeout(x(a)));
      }
      let e = void 0,
        f = !1,
        g = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          g || ((g = !0), void 0 !== e ? (f = !0) : c(0));
        } else if (b.tag) {
          g ||
            (d(),
            (e = w(
              setTimeout(function () {
                e = void 0;
                c(b);
                f && c(0);
              }, a(b[0]))
            )));
        } else {
          var n = b[0];
          c(
            l(0, [
              function (a) {
                if (!g) {
                  return a ? ((g = !0), (f = !1), d(), n(1)) : n(0);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function delay$1(a) {
  return function (b) {
    return function (c) {
      let d = 0;
      return b(function (b) {
        'number' == typeof b || b.tag
          ? ((d = (d + 1) | 0),
            setTimeout(function () {
              0 !== d && ((d = (d - 1) | 0), c(b));
            }, a))
          : c(b);
      });
    };
  };
}

function filter$1(a) {
  return function (b) {
    return function (c) {
      let d = m;
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? (a(b[0]) ? c(b) : d(0)) : ((d = b[0]), c(b));
      });
    };
  };
}

function forEach$1(a) {
  return function (b) {
    N(a)(b);
  };
}

function fromCallbag$2(a) {
  return function (b) {
    function c(a, c) {
      switch (a) {
        case 0:
          b(
            l(0, [
              function (a) {
                return a ? c(2) : c(1);
              },
            ])
          );
          break;

        case 1:
          b(l(1, [c]));
          break;

        case 2:
          b(0);
      }
    }
    return 2 === a.length ? a(0, c) : a.bind(null, 0, c);
  };
}

function fromDomEvent$1(a, b) {
  return (function (a, b) {
    return function (c) {
      function d(a) {
        c(l(1, [a]));
      }
      c(
        l(0, [
          function (c) {
            c && a.removeEventListener(b, d);
          },
        ])
      );
      a.addEventListener(b, d);
    };
  })(a, b);
}

function fromList$1(a) {
  return function (b) {
    let c = !1,
      d = !1,
      e = !1,
      f = a;
    b(
      l(0, [
        function (a) {
          if (a) {
            c = !0;
          } else if (d) {
            e = !0;
          } else {
            for (d = e = !0; e && !c; ) {
              (a = f) ? ((f = a[1]), (e = !1), b(l(1, [a[0]]))) : ((c = !0), b(0));
            }
            d = !1;
          }
        },
      ])
    );
  };
}

function fromObservable$2(a) {
  var b = void 0 !== a[P$1] ? a[P$1]() : a;
  return function (a) {
    var c = b.subscribe({
      next: function (c) {
        a(l(1, [c]));
      },
      complete: function () {
        a(0);
      },
      error: Q,
    });
    a(
      l(0, [
        function (a) {
          if (a) {
            return c.unsubscribe();
          }
        },
      ])
    );
  };
}

function fromPromise$1(a) {
  return function (b) {
    let c = !1;
    a.then(function (a) {
      c || (b(l(1, [a])), b(0));
      return Promise.resolve(void 0);
    });
    b(
      l(0, [
        function (a) {
          a && (c = !0);
        },
      ])
    );
  };
}

function fromValue$1(a) {
  return function (b) {
    let c = !1;
    b(
      l(0, [
        function (d) {
          d ? (c = !0) : c || ((c = !0), b(l(1, [a])), b(0));
        },
      ])
    );
  };
}

function interval$1(a) {
  return function (b) {
    let c = 0;
    var d = setInterval(function () {
      var a = c;
      c = (c + 1) | 0;
      b(l(1, [a]));
    }, a);
    b(
      l(0, [
        function (a) {
          a && clearInterval(d);
        },
      ])
    );
  };
}

function make$1(a) {
  return function (b) {
    let c = r,
      d = !1;
    c = a({
      next: function (a) {
        d || b(l(1, [a]));
      },
      complete: function () {
        d || ((d = !0), b(0));
      },
    });
    b(
      l(0, [
        function (a) {
          if (a && !d) {
            return (d = !0), c();
          }
        },
      ])
    );
  };
}

function makeSubject$1() {
  let a = [],
    b = !1;
  return {
    source: function (c) {
      function b(a) {
        return a !== c;
      }
      a = a.concat(c);
      c(
        l(0, [
          function (c) {
            c && (a = a.filter(b));
          },
        ])
      );
    },
    next: function (c) {
      b ||
        a.forEach(function (a) {
          a(l(1, [c]));
        });
    },
    complete: function () {
      b || ((b = !0), a.forEach(t));
    },
  };
}

function map$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        b = 'number' == typeof b ? 0 : b.tag ? l(1, [a(b[0])]) : l(0, [b[0]]);
        c(b);
      });
    };
  };
}

function merge$1$1(a) {
  return D(E)(p(a));
}

function never$1(a) {
  a(l(0, [m]));
}

function onEnd$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          if (d) {
            return;
          }
          d = !0;
          c(b);
          return a();
        }
        if (b.tag) {
          d || c(b);
        } else {
          var e = b[0];
          c(
            l(0, [
              function (c) {
                if (!d) {
                  return c ? ((d = !0), e(c), a()) : e(c);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function onStart$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? c(b) : (c(b), a());
      });
    };
  };
}

function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, d = arguments.length; c < d; c++) {
    b = a[c](b);
  }
  return b;
}

function publish$1(a) {
  return N(O)(a);
}

function sample$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = !1,
        h = !1;
      b(function (a) {
        'number' == typeof a
          ? h || ((h = !0), e(1), c(0))
          : a.tag
          ? ((f = w(a[0])), g ? (g = !1) : ((g = !0), e(0), d(0)))
          : (d = a[0]);
      });
      a(function (a) {
        var b = f;
        'number' == typeof a
          ? h || ((h = !0), d(1), c(0))
          : a.tag
          ? void 0 === b || h || ((f = void 0), c(l(1, [x(b)])))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (a) {
            if (!h) {
              if (a) {
                return (h = !0), d(1), e(1);
              }
              if (!g) {
                return (g = !0), d(0), e(0);
              }
            }
          },
        ])
      );
    };
  };
}

function scan$1(a, b) {
  return (function (a, b) {
    return function (c) {
      return function (d) {
        let e = b;
        return c(function (c) {
          'number' == typeof c
            ? (c = 0)
            : c.tag
            ? ((e = a(e, c[0])), (c = l(1, [e])))
            : (c = l(0, [c[0]]));
          d(c);
        });
      };
    };
  })(a, b);
}

function share$1(a) {
  function b(a) {
    'number' == typeof a
      ? (c.forEach(J), (c = []))
      : a.tag
      ? ((e = !1),
        c.forEach(function (b) {
          b(a);
        }))
      : (d = a[0]);
  }
  let c = [],
    d = m,
    e = !1;
  return function (f) {
    function g(a) {
      return a !== f;
    }
    c = c.concat(f);
    1 === c.length && a(b);
    f(
      l(0, [
        function (a) {
          if (a) {
            if (((c = c.filter(g)), 0 === c.length)) {
              return d(1);
            }
          } else {
            e || ((e = !0), d(a));
          }
        },
      ])
    );
  };
}

function skip$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = a;
      return b(function (a) {
        'number' == typeof a
          ? c(a)
          : a.tag
          ? 0 < e
            ? ((e = (e - 1) | 0), d(0))
            : c(a)
          : ((d = a[0]), c(a));
      });
    };
  };
}

function skipUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? g && ((k = !0), e(1))
          : a.tag
          ? ((g = !1), f(1))
          : ((f = a = a[0]), a(0));
      }
      let e = m,
        f = m,
        g = !0,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? (g && f(1), (k = !0), c(0))
          : b.tag
          ? g || k
            ? h
              ? (h = !1)
              : ((h = !0), e(0), f(0))
            : ((h = !1), c(b))
          : ((e = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                if (((k = !0), e(1), g)) {
                  return f(1);
                }
              } else {
                h || ((h = !0), g && f(0), e(0));
              }
            }
          },
        ])
      );
    };
  };
}

function skipWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !0;
      return b(function (b) {
        'number' == typeof b
          ? c(b)
          : b.tag
          ? e
            ? a(b[0])
              ? d(0)
              : ((e = !1), c(b))
            : c(b)
          : ((d = b[0]), c(b));
      });
    };
  };
}

function switchAll$1(a) {
  return K(L)(a);
}

function take$1(a) {
  return function (b) {
    return function (c) {
      let d = !1,
        e = 0,
        f = m;
      b(function (b) {
        'number' == typeof b
          ? d || ((d = !0), c(0))
          : b.tag
          ? e < a && !d && ((e = (e + 1) | 0), c(b), !d && e >= a && ((d = !0), c(0), f(1)))
          : ((b = b[0]), 0 >= a ? ((d = !0), c(0), b(1)) : (f = b));
      });
      c(
        l(0, [
          function (b) {
            if (!d) {
              if (b) {
                return (d = !0), f(1);
              }
              if (e < a) {
                return f(0);
              }
            }
          },
        ])
      );
    };
  };
}

function takeUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' != typeof a && (a.tag ? ((e = !0), f(1), c(0)) : ((g = a = a[0]), a(0)));
      }
      let e = !1,
        f = m,
        g = m;
      b(function (b) {
        'number' == typeof b ? e || ((e = !0), g(1), c(0)) : b.tag ? e || c(b) : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!e) {
              return a ? ((e = !0), f(1), g(1)) : f(0);
            }
          },
        ])
      );
    };
  };
}

function takeWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !1;
      return b(function (b) {
        'number' == typeof b
          ? e || ((e = !0), c(0))
          : b.tag
          ? e || (a(b[0]) ? c(b) : ((e = !0), c(0), d(1)))
          : ((d = b[0]), c(b));
      });
    };
  };
}

function throttle$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        void 0 !== g && clearTimeout(x(g));
      }
      function e() {
        g = void 0;
        f = !1;
      }
      let f = !1,
        g = void 0;
      return b(function (b) {
        if ('number' == typeof b) {
          d(), c(0);
        } else if (b.tag) {
          f || ((f = !0), d(), (g = w(setTimeout(e, a(b[0])))), c(b));
        } else {
          var h = b[0];
          c(
            l(0, [
              function (a) {
                return a ? (d(), h(1)) : h(a);
              },
            ])
          );
        }
      });
    };
  };
}

function toArray$1(a) {
  let b = [],
    c = m,
    d = !1;
  a(function (a) {
    'number' == typeof a ? (d = !0) : a.tag ? (b.push(a[0]), c(0)) : ((c = a = a[0]), a(0));
  });
  d || c(1);
  return b;
}

function toCallbag$2(a) {
  return function (b, c) {
    if (0 === b) {
      return a(function (a) {
        function b(a) {
          switch (a) {
            case 1:
              d(0);
              break;

            case 2:
              d(1);
          }
        }
        if ('number' == typeof a) {
          return 2 === c.length ? c(2, void 0) : c.bind(null, 2, void 0);
        }
        if (a.tag) {
          return (a = a[0]), 2 === c.length ? c(1, a) : c.bind(null, 1, a);
        }
        var d = a[0];
        return 2 === c.length ? c(0, b) : c.bind(null, 0, b);
      });
    }
  };
}

function toObservable$2(a) {
  var b = {
    subscribe: function (b, d, e) {
      var c = ('object' == typeof b ? b.next.bind(b) : b) || R,
        g = ('object' == typeof b ? b.complete.bind(b) : e) || S;
      let h = m,
        k = !1;
      a(function (a) {
        if ('number' == typeof a) {
          return (k = !0), g();
        }
        if (a.tag) {
          if (k) {
            return;
          }
          c(a[0]);
          return h(0);
        }
        h = a = a[0];
        a(0);
      });
      return {
        unsubscribe: function () {
          if (!k) {
            return (this.closed = !1), (k = !0), h(1);
          }
        },
        closed: !1,
      };
    },
  };
  b[P$1] = function () {
    return b;
  };
  return b;
}

function toPromise$1(a) {
  return new Promise(function (b) {
    M(1)(a)(function (a) {
      if ('number' != typeof a) {
        if (a.tag) {
          b(a[0]);
        } else {
          a[0](0);
        }
      }
    });
  });
}

var v = [],
  P$1 =
    'function' == typeof Symbol
      ? Symbol.observable || (Symbol.observable = Symbol('observable'))
      : '@@observable';

var xs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    buffer: buffer$1,
    combine: combine$1,
    concat: concat$1,
    concatAll: concatAll$1,
    concatMap: z,
    debounce: debounce$1,
    delay: delay$1,
    empty: u,
    filter: filter$1,
    flatten: G,
    forEach: forEach$1,
    fromArray: p,
    fromCallbag: fromCallbag$2,
    fromDomEvent: fromDomEvent$1,
    fromList: fromList$1,
    fromObservable: fromObservable$2,
    fromPromise: fromPromise$1,
    fromValue: fromValue$1,
    interval: interval$1,
    make: make$1,
    makeSubject: makeSubject$1,
    map: map$1,
    merge: merge$1$1,
    mergeAll: G,
    mergeMap: D,
    never: never$1,
    onEnd: onEnd$1,
    onPush: H,
    onStart: onStart$1,
    pipe: pipe,
    publish: publish$1,
    sample: sample$1,
    scan: scan$1,
    share: share$1,
    skip: skip$1,
    skipUntil: skipUntil$1,
    skipWhile: skipWhile$1,
    subscribe: N,
    switchAll: switchAll$1,
    switchMap: K,
    take: take$1,
    takeLast: M,
    takeUntil: takeUntil$1,
    takeWhile: takeWhile$1,
    tap: H,
    throttle: throttle$1,
    toArray: toArray$1,
    toCallbag: toCallbag$2,
    toObservable: toObservable$2,
    toPromise: toPromise$1
});

function $unique(length) {
    if (!length) {
        return ((+new Date()).toString(16).slice(2) +
            Math.random().toString(16).slice(2));
    }
    else {
        let res = '';
        while (length > 0) {
            res +=
                (+new Date()).toString(16).slice(2) +
                    Math.random().toString(16).slice(2);
            length--;
        }
        return res;
    }
}

const wait = function (time, data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            resolve(data);
        }, time);
    });
};

var $async = /*#__PURE__*/Object.freeze({
    __proto__: null,
    wait: wait
});

function xss (xs) {
    return {
        Observable: class Observable {
            constructor({ start, end, } = {}) {
                this.next = (data) => {
                    return this.native.next(data);
                };
                this.native = xs.makeSubject();
                this.pipe = xs.pipe(this.native.source, xs.onStart(start ? start : () => { }), xs.onEnd(end ? end : () => { }));
            }
            subscribe(handler) {
                return xs.pipe(this.native.source, xs.subscribe(handler))['unsubscribe'];
            }
            end() {
                return this.native.next(this.native.complete);
            }
        },
    };
}

var _private;
class Atom {
    constructor(options, priv) {
        this._ = Atom._;
        this.tag = Atom.tag;
        this.thrower = Atom.thrower;
        this.async = Atom.async;
        this.unique = Atom.unique;
        this.xs = Atom.xs;
        this.xss = Atom.xss;
        this.publicKEY = 'Treizenith';
        this.sym = Atom.sym;
        this.err = Atom.err;
        _private.set(this, {
            privateKEY: '',
            trials: [],
        });
        this.$ = {};
        this.plugins = [];
        if (!this._.is.obj(options) && !this._.is.und(options)) {
            this.thrower.make('options must be objects', {
                target: this.tag,
            }, true);
        }
        if (!this._.is.und(options)) {
            this.options = options;
        }
        else {
            this.options = {};
        }
        if (priv) {
            if (!this._.is.str(priv)) {
                __classPrivateFieldGet(this, _private).privateKEY = this.unique();
            }
            else {
                __classPrivateFieldGet(this, _private).privateKEY = priv;
            }
        }
    }
    set(priv, propName, value) {
        if (__classPrivateFieldGet(this, _private).privateKEY == priv) {
            return this._.obj.set(__classPrivateFieldGet(this, _private), propName, value);
        }
        else {
            __classPrivateFieldGet(this, _private).trials.push([priv, propName, value]);
            return this.thrower.make('invalid priv in set', {
                target: this.tag,
            });
        }
    }
    get(priv, propName) {
        if (__classPrivateFieldGet(this, _private).privateKEY == priv) {
            return this._.obj.get(__classPrivateFieldGet(this, _private), propName);
        }
        else {
            __classPrivateFieldGet(this, _private).trials.push([priv, propName]);
            return this.thrower.make('invalid priv in get', {
                target: this.tag,
            });
        }
    }
    plug(plugin) {
        if (plugin) {
            this.plugins = this.plugins.concat(plugin);
        }
        (Array.isArray(plugin) ? plugin : [plugin]).forEach((pl) => {
            Object.assign(this, pl(this, this.options));
        });
        return this;
    }
}
_private = new WeakMap();
Atom._ = quark;
Atom.thrower = thrower;
Atom.async = $async;
Atom.unique = $unique;
Atom.xs = xs;
Atom.xss = xss(xs);
Atom.tag = '[ AtomJS ] ';
Atom.sym = Symbol('ex');
Atom.err = Symbol('err');

let defs = {};
var thrower = {
    make(message, options = defs, strict) {
        let err = Object.assign(new Error(message), options, {
            err: Atom.err,
        });
        if (strict) {
            throw err;
        }
        return err;
    },
    isErr(a) {
        return Atom.err === a;
    },
};

var _private$1;
class Atom$1 {
    constructor(options, priv) {
        this._ = Atom$1._;
        this.tag = Atom$1.tag;
        this.thrower = Atom$1.thrower;
        this.async = Atom$1.async;
        this.unique = Atom$1.unique;
        this.xs = Atom$1.xs;
        this.xss = Atom$1.xss;
        this.publicKEY = 'Treizenith';
        this.sym = Atom$1.sym;
        this.err = Atom$1.err;
        _private$1.set(this, {
            privateKEY: '',
            trials: [],
        });
        this.$ = {};
        this.plugins = [];
        if (!this._.is.obj(options) && !this._.is.und(options)) {
            this.thrower.make('options must be objects', {
                target: this.tag,
            }, true);
        }
        if (!this._.is.und(options)) {
            this.options = options;
        }
        else {
            this.options = {};
        }
        if (priv) {
            if (!this._.is.str(priv)) {
                __classPrivateFieldGet(this, _private$1).privateKEY = this.unique();
            }
            else {
                __classPrivateFieldGet(this, _private$1).privateKEY = priv;
            }
        }
    }
    set(priv, propName, value) {
        if (__classPrivateFieldGet(this, _private$1).privateKEY == priv) {
            return this._.obj.set(__classPrivateFieldGet(this, _private$1), propName, value);
        }
        else {
            __classPrivateFieldGet(this, _private$1).trials.push([priv, propName, value]);
            return this.thrower.make('invalid priv in set', {
                target: this.tag,
            });
        }
    }
    get(priv, propName) {
        if (__classPrivateFieldGet(this, _private$1).privateKEY == priv) {
            return this._.obj.get(__classPrivateFieldGet(this, _private$1), propName);
        }
        else {
            __classPrivateFieldGet(this, _private$1).trials.push([priv, propName]);
            return this.thrower.make('invalid priv in get', {
                target: this.tag,
            });
        }
    }
    plug(plugin) {
        if (plugin) {
            this.plugins = this.plugins.concat(plugin);
        }
        (Array.isArray(plugin) ? plugin : [plugin]).forEach((pl) => {
            Object.assign(this, pl(this, this.options));
        });
        return this;
    }
}
_private$1 = new WeakMap();
Atom$1._ = quark;
Atom$1.thrower = thrower;
Atom$1.async = $async;
Atom$1.unique = $unique;
Atom$1.xs = xs;
Atom$1.xss = xss(xs);
Atom$1.tag = '[ AtomJS ] ';
Atom$1.sym = Symbol('ex');
Atom$1.err = Symbol('err');

export default Atom$1;
//# sourceMappingURL=index.esm.js.map

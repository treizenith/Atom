// @ts-check
/* eslint-env node */

/**
 * An object with Prettier.js options.
 * @type {import('prettier').Options}
 */
const options = {
    jsxBracketSameLine: true,
    quoteProps: 'consistent',
    singleQuote: true,
    trailingComma: 'all',
    useTabs: true,
    tabWidth: 4,
    semi: true,
};

module.exports = options;

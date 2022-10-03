/**
 * @author Dominik Szymanski
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/disable-form-spellcheck'),
    RuleTester = require("eslint").RuleTester;
const testMapper = require("../../utils/testMapper").testMapper;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("disable-form-spellcheck", rule, {
    valid: [
        {code: `<form spellcheck="false" />`, parserOptions: {
                ecmaVersion: 2018,
                ecmaFeatures: {
                    experimentalObjectRestSpread: true,
                    jsx: true,
                },
            }},
    ],

    invalid: [
        {
            code: `<form name="test" />`,
            errors: [
                {
                    message: 'You should set "spellcheck" attribute to false due to security reasons',
                    type: "JSXOpeningElement"
                }
            ]
        },
        {
            code: `<form spellcheck="true" />`,
            errors: [
                {
                    message: 'You should set "spellcheck" attribute to false due to security reasons',
                    type: "JSXOpeningElement"
                }
            ]
        },
    ].map(testMapper)
});

/**
 * @author Dominik Szymanski
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/disable-input-spellcheck"),
    RuleTester = require("eslint").RuleTester;
const {testMapper} = require("../../utils/testMapper");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("disable-input-spellcheck", rule, {
    valid: [
        {code: `<input spellcheck="false" />`},
    ].map(testMapper),

    invalid: [
        {
            code: `<input type="email" />`,
            errors: [
                {
                    message: 'You should set spellcheck attribute to false due to security reasons',
                    type: "JSXOpeningElement"
                }
            ]
        },
        {
            code: `<input type="password" spellcheck="true" />`,
            errors: [
                {
                    message: 'You should set spellcheck attribute to false due to security reasons',
                    type: "JSXOpeningElement"
                }
            ]
        },
    ].map(testMapper)
});

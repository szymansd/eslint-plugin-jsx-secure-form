/**
 * @fileoverview Disable spellcheck for all inputs.
 * @author Dominik Szymanski
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const elementType = require("jsx-ast-utils/elementType");
const getProp = require("jsx-ast-utils/getProp");
const getLiteralPropValue = require("jsx-ast-utils/getLiteralPropValue");
const constants = require("../consts");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const errorMessage = 'You should set spellcheck attribute to false due to security reasons';

module.exports = context => ({
    JSXOpeningElement: node => {
        const isInput = elementType(node) === constants.ELEMENT_INPUT_TYPE;

        if (isInput) {
            const spellcheckValue = getLiteralPropValue(
                getProp(node.attributes, constants.SPELLCHECK_PROPERTY)
            );
            if (spellcheckValue === undefined || spellcheckValue === true) {
                context.report({
                    node,
                    message: errorMessage
                });
            }
        }
    }
});

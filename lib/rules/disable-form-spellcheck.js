/**
 * @fileoverview Enforce all forms have spellcheck disabled
 * @author Dominik Szymanski
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

const getProp = require("jsx-ast-utils/getProp")
const elementType = require("jsx-ast-utils/elementType");
const constants = require("../consts");
const getLiteralPropValue = require("jsx-ast-utils/getLiteralPropValue");

const errorMessage = 'You should set "spellcheck" attribute to false due to security reasons';

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "set spellcheck to false",
            recommended: true,
        },
        fixable: "code",
        schema: [] // no options
    },
    create(context) {
        return {
            JSXOpeningElement: node => {
                const isForm = elementType(node) === constants.ELEMENT_FORM_TYPE;

                if (isForm) {
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
        }
    },
};

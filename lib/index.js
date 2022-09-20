/**
 * @author Dominik Szymanski
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    recommended: {
        plugins: ['jsx-secure-form'],
        rules: {
            "jsx-secure-form/disable-form-spellcheck": 2,
            "jsx-secure-form/disable-input-spellcheck": 2,
        }
    }
};

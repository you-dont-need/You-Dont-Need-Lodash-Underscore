/**
 * @fileoverview Discourages the use of lodash / underscore when native methods for the same functions exist.
 * @author Patrick McElhaney
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
module.exports.rules = requireIndex(__dirname + "/lib/rules");

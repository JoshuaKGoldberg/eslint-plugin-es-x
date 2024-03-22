/**
 * DON'T EDIT THIS FILE.
 * This file was generated by "scripts/update-lib-flat-configs.js" script.
 */
"use strict"

module.exports = {
    plugins: {
        get "es-x"() {
            return require("../../index.js")
        },
    },
    rules: {
        ...require("./no-new-in-es2023").rules,
        ...require("./no-new-in-es2022").rules,
        ...require("./no-new-in-es2021").rules,
        ...require("./no-new-in-es2020").rules,
    },
}
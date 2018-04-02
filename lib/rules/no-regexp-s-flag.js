/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow RegExp `s` flag.",
            category: "ES2018",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v0.0.0/docs/rules/no-regexp-s-flag.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES2018 RegExp 's' flag is forbidden.",
        },
    },
    create(context) {
        return {
            "Literal[regex]"(node) {
                if (node.regex.flags.includes("s")) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
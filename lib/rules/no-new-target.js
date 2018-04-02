/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow `new.target` meta property.",
            category: "ES2015",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v0.0.0/docs/rules/no-new-target.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES2015 'new.target' meta property is forbidden.",
        },
    },
    create(context) {
        return {
            "MetaProperty[meta.name='new'][property.name='target']"(node) {
                context.report({ node, messageId: "forbidden" })
            },
        }
    },
}
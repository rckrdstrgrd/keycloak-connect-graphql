"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_tools_1 = require("graphql-tools");
const directiveResolvers_1 = require("./directiveResolvers");
class AuthDirective extends graphql_tools_1.SchemaDirectiveVisitor {
    constructor(config) {
        // see https://github.com/apollographql/graphql-tools/issues/837
        super(config);
    }
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        field.resolve = directiveResolvers_1.auth(resolve);
    }
}
exports.AuthDirective = AuthDirective;
class HasRoleDirective extends graphql_tools_1.SchemaDirectiveVisitor {
    constructor(config) {
        // see https://github.com/apollographql/graphql-tools/issues/837
        super(config);
    }
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        const roles = this.parseAndValidateArgs(this.args);
        field.resolve = directiveResolvers_1.hasRole(roles)(resolve);
    }
    /**
     *
     * validate a potential string or array of values
     * if an array is provided, cast all values to strings
     */
    parseAndValidateArgs(args) {
        const keys = Object.keys(args);
        if (keys.length === 1 && keys[0] === 'role') {
            const role = args[keys[0]];
            if (typeof role == 'string') {
                return [role];
            }
            else if (Array.isArray(role)) {
                return role.map(val => String(val));
            }
            else {
                throw new Error(`invalid hasRole args. role must be a String or an Array of Strings`);
            }
        }
        throw Error('invalid hasRole args. must contain only a \'role\ argument');
    }
}
exports.HasRoleDirective = HasRoleDirective;
//# sourceMappingURL=schemaDirectiveVisitors.js.map
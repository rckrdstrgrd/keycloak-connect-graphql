"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const schemaDirectiveVisitors_1 = require("./schemaDirectiveVisitors");
/**
 * Object that contains directive implementations for Apollo Server. Pass this into Apollo Server
 * to enable schemaDirectives such as `@auth` and `@hasRole`
 *
 * Example usage:
 *
 * ```javascript
 * const typeDefs = gql`
 *   type Query {
 *     hello: String! @auth
 *   }
 *
 *   type mutation {
 *     changeSomething(arg: String!): String! @hasRole(role: "admin")
 *   }
 * `
 * const server = new ApolloServer({
 *   typeDefs,
 *   resolvers,
 *   schemaDirectives: [KeycloakSchemaDirectives],
 *   context: ({ req }) => {
  *     return {
  *       kauth: new KeycloakContext({ req })
  *     }
  *   }
 * })
 * ```
 */
exports.KeycloakSchemaDirectives = {
    auth: schemaDirectiveVisitors_1.AuthDirective,
    hasRole: schemaDirectiveVisitors_1.HasRoleDirective
};
__export(require("./directiveResolvers"));
//# sourceMappingURL=index.js.map
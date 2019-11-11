import { SchemaDirectiveVisitor } from 'graphql-tools';
export declare type SchemaDirectiveMap = Record<string, typeof SchemaDirectiveVisitor>;
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
export declare const KeycloakSchemaDirectives: SchemaDirectiveMap;
export * from './directiveResolvers';

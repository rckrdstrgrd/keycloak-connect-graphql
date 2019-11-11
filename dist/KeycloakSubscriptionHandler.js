"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KeycloakToken_1 = require("./KeycloakToken");
/**
 * Provides the onSubscriptionConnect function that is used to validate incoming
 * websocket connections for subscriptions.
 *
 * Parses and validates the keycloak token sent by the client in the connectionParams
 *
 * Example usage:
 *
 * ```javascript
 * const server = app.listen({ port }, () => {
 *   console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
 *
 *   const keycloakSubscriptionHandler = new KeycloakSubscriptionHandler({ keycloak })
 *   new SubscriptionServer({
 *     execute,
 *     subscribe,
 *     schema: server.schema,
 *     onConnect: async (connectionParams, websocket, connectionContext) => {
 *       const token = await keycloakSubscriptionHandler.onSubscriptionConnect(connectionParams)
 *       return {
 *         kauth: new KeycloakSubscriptionContext(token)
 *       }
 *     }
 *   }, {
 *     server,
 *     path: '/graphql'
 *   })
 *})
 *```
 */
class KeycloakSubscriptionHandler {
    /**
     *
     * @param options
     */
    constructor(options) {
        if (!options || !options.keycloak) {
            throw new Error('missing keycloak instance in options');
        }
        this.keycloak = options.keycloak;
        this.protect = (options.protect !== null && options.protect !== undefined) ? options.protect : true;
    }
    /**
     *
     * @param connectionParams
     * @param webSocket
     * @param context
     */
    async onSubscriptionConnect(connectionParams, webSocket, context) {
        if (!connectionParams || typeof connectionParams !== 'object') {
            if (this.protect === true) {
                throw new Error('Access Denied - missing connection parameters for Authentication');
            }
            return;
        }
        const header = connectionParams.Authorization
            || connectionParams.authorization
            || connectionParams.Auth
            || connectionParams.auth;
        if (!header) {
            if (this.protect === true) {
                throw new Error('Access Denied - missing Authorization field in connection parameters');
            }
            return;
        }
        const token = this.getBearerTokenFromHeader(header, this.keycloak.config.clientId);
        try {
            await this.keycloak.grantManager.validateToken(token, 'Bearer');
            //@ts-ignore
            return token;
        }
        catch (e) {
            throw new Error(`Access Denied - ${e}`);
        }
    }
    getBearerTokenFromHeader(header, clientId) {
        if (header && typeof header === 'string' && (header.indexOf('bearer ') === 0 || header.indexOf('Bearer ') === 0)) {
            const token = header.substring(7);
            return new KeycloakToken_1.Token(token, clientId);
        }
    }
}
exports.KeycloakSubscriptionHandler = KeycloakSubscriptionHandler;
//# sourceMappingURL=KeycloakSubscriptionHandler.js.map
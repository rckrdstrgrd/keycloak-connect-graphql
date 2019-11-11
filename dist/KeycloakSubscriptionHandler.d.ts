import Keycloak from './KeycloakTypings';
import { KeycloakSubscriptionHandlerOptions } from './api';
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
export declare class KeycloakSubscriptionHandler {
    keycloak: Keycloak.Keycloak;
    protect?: boolean;
    /**
     *
     * @param options
     */
    constructor(options: KeycloakSubscriptionHandlerOptions);
    /**
     *
     * @param connectionParams
     * @param webSocket
     * @param context
     */
    onSubscriptionConnect(connectionParams: any, webSocket: any, context: any): Promise<Keycloak.Token | undefined | Error>;
    private getBearerTokenFromHeader;
}

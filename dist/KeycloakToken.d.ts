/**
 * Construct a token.
 *
 * Based on a JSON Web Token string, construct a token object. Optionally
 * if a `clientId` is provided, the token may be tested for roles with
 * `hasRole()`.
 *
 * @constructor
 *
 * @param {String} token The JSON Web Token formatted token string.
 * @param {String} clientId Optional clientId if this is an `access_token`.
 */
/// <reference types="node" />
export declare class Token {
    token: string;
    clientId?: string;
    header?: any;
    content?: any;
    signature?: Buffer;
    signed?: string;
    constructor(token: string, clientId?: string);
    /**
     * Determine if this token is expired.
     *
     * @return {boolean} `true` if it is expired, otherwise `false`.
     */
    isExpired(): boolean;
    /**
     * Determine if this token has an associated role.
     *
     * This method is only functional if the token is constructed
     * with a `clientId` parameter.
     *
     * The parameter matches a role specification using the following rules:
     *
     * - If the name contains no colons, then the name is taken as the entire
     *   name of a role within the current application, as specified via
     *   `clientId`.
     * - If the name starts with the literal `realm:`, the subsequent portion
     *   is taken as the name of a _realm-level_ role.
     * - Otherwise, the name is split at the colon, with the first portion being
     *   taken as the name of an arbitrary application, and the subsequent portion
     *   as the name of a role with that app.
     *
     * @param {String} name The role name specifier.
     *
     * @return {boolean} `true` if this token has the specified role, otherwise `false`.
     */
    hasRole(name: string): boolean;
    /**
     * Determine if this token has an associated specific application role.
     *
     * Even if `clientId` is not set, this method may be used to explicitly test
     * roles for any given application.
     *
     * @param {String} appName The identifier of the application to test.
     * @param {String} roleName The name of the role within that application to test.
     *
     * @return {boolean} `true` if this token has the specified role, otherwise `false`.
     */
    hasApplicationRole(appName: string, roleName: string): boolean;
    /**
     * Determine if this token has an associated specific realm-level role.
     *
     * Even if `clientId` is not set, this method may be used to explicitly test
     * roles for the realm.
     *
     * @param {String} appName The identifier of the application to test.
     * @param {String} roleName The name of the role within that application to test.
     *
     * @return {boolean} `true` if this token has the specified role, otherwise `false`.
     */
    hasRealmRole(roleName: string): boolean;
    /**
     * Determine if this token has an associated role.
     *
     * This method is only functional if the token is constructed
     * with a `clientId` parameter.
     *
     * The parameter matches a role specification using the following rules:
     *
     * - If the name contains no colons, then the name is taken as the entire
     *   name of a role within the current application, as specified via
     *   `clientId`.
     * - If the name starts with the literal `realm:`, the subsequent portion
     *   is taken as the name of a _realm-level_ role.
     * - Otherwise, the name is split at the colon, with the first portion being
     *   taken as the name of an arbitrary application, and the subsequent portion
     *   as the name of a role with that app.
     *
     * @param {String} permission The role name specifier.
     *
     * @return {boolean} `true` if this token has the specified role, otherwise `false`.
     */
    hasPermission(resource: string, scope: string): boolean;
}

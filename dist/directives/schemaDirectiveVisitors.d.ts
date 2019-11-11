import { GraphQLSchema } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { VisitableSchemaType } from 'graphql-tools/dist/schemaVisitor';
export declare class AuthDirective extends SchemaDirectiveVisitor {
    constructor(config: {
        name: string;
        visitedType: VisitableSchemaType;
        schema: GraphQLSchema;
        context: {
            [key: string]: any;
        };
    });
    visitFieldDefinition(field: any): void;
}
export declare class HasRoleDirective extends SchemaDirectiveVisitor {
    constructor(config: {
        name: string;
        args: {
            [name: string]: any;
        };
        visitedType: VisitableSchemaType;
        schema: GraphQLSchema;
        context: {
            [key: string]: any;
        };
    });
    visitFieldDefinition(field: any): void;
    /**
     *
     * validate a potential string or array of values
     * if an array is provided, cast all values to strings
     */
    parseAndValidateArgs(args: {
        [name: string]: any;
    }): Array<string>;
}

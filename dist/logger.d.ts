import { VendureLogger } from "@vendure/core";
/**
 * Google Cloud Logger
 */
export declare class GoogleCloudLogger implements VendureLogger {
    private logger;
    private log;
    private resource;
    constructor(projectId: string, name: string, resourceType: string);
    error(message: string, context?: string, trace?: string): void;
    warn(message: string, context?: string): void;
    info(message: string, context?: string): void;
    verbose(message: string, context?: string): void;
    debug(message: string, context?: string): void;
}

/// <reference types="node" />
import { AsyncLocalStorage } from "async_hooks";
import { Request } from "express";
export declare const asyncLocalStorage: AsyncLocalStorage<Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>>;
export declare const PROVIDE_OPTIONS: unique symbol;
export declare type GoogleCloudLoggerPluginOptions = {
    /**
     * The google cloud project ID
     */
    projectId: string;
    /**
     * The google cloud logging log name
     */
    logName: string;
    /**
     * The instance's gcp resource type - such as `cloud_run_revision` or `gce_backend_service`
     * See: https://cloud.google.com/logging/docs/api/v2/resource-list
     */
    resourceType: string;
};

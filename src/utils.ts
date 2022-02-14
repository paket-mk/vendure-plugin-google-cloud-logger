import { AsyncLocalStorage } from "async_hooks";
import { Request } from "express";

export const asyncLocalStorage = new AsyncLocalStorage<Request>();
export const PROVIDE_OPTIONS = Symbol("options");
export type GoogleCloudLoggerPluginOptions = {
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

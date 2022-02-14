import { Logging, Log } from "@google-cloud/logging";
import { VendureLogger } from "@vendure/core";
import { asyncLocalStorage } from "./utils";

/**
 * Google Cloud Logger
 */
export class GoogleCloudLogger implements VendureLogger {
  private logger: Logging;
  private log: Log;
  private resource: { type: string };

  constructor(projectId: string, name: string, resourceType: string) {
    this.logger = new Logging({ projectId });
    this.log = this.logger.log(name);
    this.resource = { type: resourceType };
  }

  error(message: string, context?: string, trace?: string) {
    const req = asyncLocalStorage.getStore();

    const metadata = {
      severity: "ERROR",
      resource: this.resource,
      httpRequest: req,
    };
    this.log.write(this.log.entry(metadata, { message, context, trace }));
  }

  warn(message: string, context?: string) {
    const req = asyncLocalStorage.getStore();

    const metadata = {
      severity: "WARNING",
      resource: this.resource,
      httpRequest: req,
    };
    this.log.write(this.log.entry(metadata, { message, context }));
  }

  info(message: string, context?: string) {
    const req = asyncLocalStorage.getStore();

    const metadata = {
      severity: "INFO",
      resource: this.resource,
      httpRequest: req,
    };
    this.log.write(this.log.entry(metadata, { message, context }));
  }

  verbose(message: string, context?: string) {
    const req = asyncLocalStorage.getStore();

    const metadata = {
      severity: "DEFAULT",
      resource: this.resource,
      httpRequest: req,
    };
    this.log.write(this.log.entry(metadata, { message, context }));
  }

  debug(message: string, context?: string) {
    const req = asyncLocalStorage.getStore();

    const metadata = {
      severity: "DEBUG",
      resource: this.resource,
      httpRequest: req,
    };
    this.log.write(this.log.entry(metadata, { message, context }));
  }
}

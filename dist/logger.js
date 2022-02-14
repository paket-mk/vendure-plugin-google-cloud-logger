"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCloudLogger = void 0;
const logging_1 = require("@google-cloud/logging");
const utils_1 = require("./utils");
/**
 * Google Cloud Logger
 */
class GoogleCloudLogger {
    constructor(projectId, name, resourceType) {
        this.logger = new logging_1.Logging({ projectId });
        this.log = this.logger.log(name);
        this.resource = { type: resourceType };
    }
    error(message, context, trace) {
        const req = utils_1.asyncLocalStorage.getStore();
        const metadata = {
            severity: "ERROR",
            resource: this.resource,
            httpRequest: req,
        };
        this.log.write(this.log.entry(metadata, { message, context, trace }));
    }
    warn(message, context) {
        const req = utils_1.asyncLocalStorage.getStore();
        const metadata = {
            severity: "WARNING",
            resource: this.resource,
            httpRequest: req,
        };
        this.log.write(this.log.entry(metadata, { message, context }));
    }
    info(message, context) {
        const req = utils_1.asyncLocalStorage.getStore();
        const metadata = {
            severity: "INFO",
            resource: this.resource,
            httpRequest: req,
        };
        this.log.write(this.log.entry(metadata, { message, context }));
    }
    verbose(message, context) {
        const req = utils_1.asyncLocalStorage.getStore();
        const metadata = {
            severity: "DEFAULT",
            resource: this.resource,
            httpRequest: req,
        };
        this.log.write(this.log.entry(metadata, { message, context }));
    }
    debug(message, context) {
        const req = utils_1.asyncLocalStorage.getStore();
        const metadata = {
            severity: "DEBUG",
            resource: this.resource,
            httpRequest: req,
        };
        this.log.write(this.log.entry(metadata, { message, context }));
    }
}
exports.GoogleCloudLogger = GoogleCloudLogger;

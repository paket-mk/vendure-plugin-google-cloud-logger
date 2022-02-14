"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GoogleCloudLoggerPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCloudLoggerPlugin = void 0;
const core_1 = require("@nestjs/core");
const core_2 = require("@vendure/core");
const utils_1 = require("./utils");
const exception_filter_1 = require("./exception-filter");
const logger_1 = require("./logger");
let GoogleCloudLoggerPlugin = GoogleCloudLoggerPlugin_1 = class GoogleCloudLoggerPlugin {
    static init(options) {
        GoogleCloudLoggerPlugin_1.options = options;
        return GoogleCloudLoggerPlugin_1;
    }
};
GoogleCloudLoggerPlugin = GoogleCloudLoggerPlugin_1 = __decorate([
    (0, core_2.VendurePlugin)({
        imports: [core_2.PluginCommonModule],
        providers: [
            { provide: core_1.APP_FILTER, useClass: exception_filter_1.AllExceptionsFilter },
            { provide: utils_1.PROVIDE_OPTIONS, useFactory: () => GoogleCloudLoggerPlugin_1.options },
        ],
        configuration(config) {
            const options = GoogleCloudLoggerPlugin_1.options;
            config.logger = new logger_1.GoogleCloudLogger(options.projectId, options.logName, options.resourceType);
            config.apiOptions.middleware.unshift({
                route: "/",
                handler: (req, _res, next) => {
                    utils_1.asyncLocalStorage.run(req, () => next());
                },
            });
            return config;
        },
    })
], GoogleCloudLoggerPlugin);
exports.GoogleCloudLoggerPlugin = GoogleCloudLoggerPlugin;

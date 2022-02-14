import { APP_FILTER } from "@nestjs/core";
import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { Request, Response, NextFunction } from "express";
import { asyncLocalStorage, GoogleCloudLoggerPluginOptions, PROVIDE_OPTIONS } from "./utils";
import { AllExceptionsFilter } from "./exception-filter";
import { GoogleCloudLogger } from "./logger";

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: PROVIDE_OPTIONS, useFactory: () => GoogleCloudLoggerPlugin.options },
  ],
  configuration(config) {
    const options = GoogleCloudLoggerPlugin.options;
    config.logger = new GoogleCloudLogger(options.projectId, options.logName, options.resourceType);
    config.apiOptions.middleware.unshift({
      route: "/",
      handler: (req: Request, _res: Response, next: NextFunction) => {
        asyncLocalStorage.run(req, () => next());
      },
    });
    return config;
  },
})
export class GoogleCloudLoggerPlugin {
  static options: GoogleCloudLoggerPluginOptions;
  static init(options: GoogleCloudLoggerPluginOptions) {
    GoogleCloudLoggerPlugin.options = options;
    return GoogleCloudLoggerPlugin;
  }
}

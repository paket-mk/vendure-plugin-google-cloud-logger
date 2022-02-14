# Google Cloud logger Vendure Plugin

This plugin wraps the Google Cloud SDK `@google-cloud/logging` library and sends structured logs to the GCP logging service.

The plugin attaches the current request to each log message, and uses (Async Local Storage)[https://nodejs.org/api/async_hooks.html] under the hood - so you need at least Node 14 to run it.

This is still an experimental plugin, so no warranties and all that.

## Usage

```ts
// In your vendure-config.ts file just add this plugin:
import { GoogleCloudLoggerPlugin } from 'vendure-plugin-google-cloud-logger'

export const config: VendureConfig = {
  plugins: [
    GoogleCloudLoggerPlugin.init({
      projectId: "gcp-project-id",
      resourceType: "gcp-resource-type", // e,g, cloud_run_revision
      logName: "gcp-log-name",
    }),
    ...
  ],
  ...
}
```

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular-ivy";
import { AppModule } from "./app/app.module";


Sentry.init({
  dsn: "https://a65202f4ac702acb0336204a2714313c@o4505794909765632.ingest.sentry.io/4505794916057088",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", 'https:weather-app.io/api/'],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
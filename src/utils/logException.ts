import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://bf6ea3a3e67149f3a28651df0216279a@o548683.ingest.sentry.io/4505194146627584",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  // Sessions close after app is 10 seconds in the background.
  sessionTrackingIntervalMillis: 10000,

  
});

export default function logException(error: Error, context: string) {
  Sentry.Native.captureException(error, {
    tags: {
      context,
    },
  });
}

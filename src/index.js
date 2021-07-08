import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
	// 모든환경에 설정할 경우
	dsn: "https://dc0470d57b0649558f8fef2925b93f9f@o914888.ingest.sentry.io/5854365",
	// production환경만 설정할 경우
	// dsn:
	// 	process.env.NODE_ENV === "production"
	// 		? "https://dc0470d57b0649558f8fef2925b93f9f@o914888.ingest.sentry.io/5854365"
	// 		: false,
	integrations: [new Integrations.BrowserTracing()],
	environment: process.env.NODE_ENV,
	tracesSampleRate: 1.0,
});
ReactDOM.render(<Routes />, document.getElementById("root"));

reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@shopify/polaris/build/esm/styles.css";

import { ConvexProvider, ConvexReactClient } from "convex/react";

import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

const convexUrl = import.meta.env.VITE_CONVEX_URL;

if (!convexUrl) {
  document.getElementById("root").innerHTML =
    '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:system-ui;color:#c00;">' +
    "<p>Missing <code>VITE_CONVEX_URL</code> environment variable. " +
    "Please set it in your Vercel project settings.</p></div>";
} else {
  const convex = new ConvexReactClient(convexUrl);

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <ConvexProvider client={convex}>
        <AppProvider i18n={enTranslations}>
          <App />
        </AppProvider>
      </ConvexProvider>
    </StrictMode>
  );
}

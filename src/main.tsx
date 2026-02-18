import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";

export function Root(): React.JSX.Element {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error(
    "Root element #root not found. Check index.html has <div id='root'></div>.",
  );
}

ReactDOM.createRoot(rootEl).render(<Root />);

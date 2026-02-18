import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/AppRouter";

export function App(): React.JSX.Element {
  return <RouterProvider router={appRouter} />;
}

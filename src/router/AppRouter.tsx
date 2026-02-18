// src/router/AppRouter.tsx
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../features/home/HomePage";
import { ProductsPage } from "../features/products/ProductsPage";
import { PrivacyPage } from "../features/legal/PrivacyPage";
import { CookiesPage } from "../features/legal/CookiesPage";

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "privacy", element: <PrivacyPage /> },
        { path: "cookies", element: <CookiesPage /> },
      ],
    },
  ],
  {
    // ✅ Required for GitHub Pages when deploying under /tradesmaster-site/
    basename: import.meta.env.BASE_URL,
  },
);

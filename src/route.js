import { RootRoute, Router } from "@tanstack/react-router";
import { createRoutes as createAdminRoutes } from "./modules/admin/routes.js";
import { createRoutes as createNewsRoutes } from "./modules/news/routes.js";

export function createRouter({ api, queryClient }) {
  const root = new RootRoute();
  const context = { root, api, queryClient };

  const routeTree = root.addChildren([
    createAdminRoutes(context),
    createNewsRoutes(context),
  ]);

  return new Router({ routeTree });
}

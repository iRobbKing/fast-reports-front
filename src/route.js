import { RootRoute, Router } from "@tanstack/react-router";
import { newsRoutes } from "./modules/news/routes.js";

export const rootRoute = new RootRoute();

export function createRouter() {
  const routeTree = rootRoute.addChildren([newsRoutes]);
  return new Router({ routeTree });
}

import { Route } from "@tanstack/react-router";
import { rootRoute } from "src/route.js";
import NewsDetailsPage from "./pages/news-details-page.jsx";
import NewsListPage from "./pages/news-list-page.jsx";
import NewsRecentPage from "./pages/news-recent-page.jsx";

const newsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/news",
});

const detailRoute = new Route({
  getParentRoute: () => newsRoute,
  path: "/$newsId",
  component: NewsDetailsPage,
});

const listRoute = new Route({
  getParentRoute: () => newsRoute,
  path: "/list",
  component: NewsListPage,
});

const recentRoute = new Route({
  getParentRoute: () => newsRoute,
  path: "/",
  component: NewsRecentPage,
});

export const newsRoutes = newsRoute.addChildren([
  detailRoute,
  listRoute,
  recentRoute,
]);

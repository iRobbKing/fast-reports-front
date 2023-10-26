import { Route } from "@tanstack/react-router";
import { newsDetailsLoader, newsListLoader } from "src/query/news.js";
import NewsDetailsPage from "./pages/news-details-page.jsx";
import NewsListPage from "./pages/news-list-page.jsx";
import NewsRecentPage from "./pages/news-recent-page.jsx";

export function createRoutes({ root, api, queryClient }) {
  const context = { api, queryClient };
  const listLoader = newsListLoader(context);
  const detailsLoader = newsDetailsLoader(context);

  const newsRoute = new Route({
    getParentRoute: () => root,
    path: "/news",
  });

  const detailRoute = new Route({
    getParentRoute: () => newsRoute,
    path: "/$newsId",
    component: NewsDetailsPage,
    loader: detailsLoader,
  });

  const listRoute = new Route({
    getParentRoute: () => newsRoute,
    path: "/list",
    component: NewsListPage,
    loader: listLoader,
  });

  const recentRoute = new Route({
    getParentRoute: () => newsRoute,
    path: "/",
    component: NewsRecentPage,
    loader: listLoader,
  });

  return newsRoute.addChildren([
    detailRoute,
    listRoute,
    recentRoute,
  ]);
}

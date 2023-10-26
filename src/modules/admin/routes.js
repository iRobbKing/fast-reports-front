import { Route } from "@tanstack/react-router";
import { newsListLoader } from "src/query/news.js";
import { authGetAdminLoader } from "src/query/auth.js";
import AdminLoginPage from "src/modules/admin/pages/admin-login-page.jsx";
import NewsEditorPage from "src/modules/admin/pages/news-editor-page.jsx";

export function createRoutes({ root, api, queryClient }) {
  const context = { api, queryClient };
  const getAdminLoader = authGetAdminLoader(context);
  const listLoader = newsListLoader(context);

  const adminRoute = new Route({
    getParentRoute: () => root,
    path: "/admin",
    loader: getAdminLoader,
  });

  const loginRoute = new Route({
    getParentRoute: () => adminRoute,
    path: "/login",
    component: AdminLoginPage,
  });

  const newsEditorRoute = new Route({
    getParentRoute: () => adminRoute,
    path: "/editor",
    component: NewsEditorPage,
    loader: listLoader,
  });

  return adminRoute.addChildren([
    loginRoute,
    newsEditorRoute,
  ]);
}

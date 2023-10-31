import { redirect, Route } from "@tanstack/react-router";
import { newsListLoader } from "src/query/news.js";
import AdminLoginPage from "src/modules/admin/pages/admin-login-page.jsx";
import NewsEditorPage from "src/modules/admin/pages/news-editor-page.jsx";

export function createRoutes({ root, api, queryClient }) {
  const context = { api, queryClient };
  const listLoader = newsListLoader(context);

  async function authenticatedGuard() {
    const { authenticated } = await api.auth.isAuthenticated();
    if (!authenticated) throw redirect({ to: "/admin/login" });
  }

  const adminRoute = new Route({
    getParentRoute: () => root,
    path: "/admin",
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
    beforeLoad: authenticatedGuard,
  });

  return adminRoute.addChildren([
    loginRoute,
    newsEditorRoute,
  ]);
}

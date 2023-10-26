import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "src/route.js";
import { ApiContext } from "src/hooks/use-api.js";
import apis from "src/api.js";
import "./index.css";

// TODO: replace all inputs with buttons.
// TODO: error handling in loaders.

const queryClient = new QueryClient();
const api = apis.fake;
const router = createRouter({ api, queryClient });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContext.Provider value={{ api }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </ApiContext.Provider>
  </React.StrictMode>,
);

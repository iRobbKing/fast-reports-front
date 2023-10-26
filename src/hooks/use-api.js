import { createContext, useContext } from "react";

export const ApiContext = createContext({ api: null });

export function useApi() {
  return useContext(ApiContext).api;
}

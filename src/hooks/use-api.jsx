import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext("fake");

export function useApi(api) {
  const mode = useContext(ApiContext);
  return api[mode];
}

export function ApiProvider({ mode, children }) {
  return (
    <ApiProvider.Provider value={mode}>
      {children}
    </ApiProvider.Provider>
  );
}

ApiProvider.propTypes = {
  mode: PropTypes.oneOf(["fake", "http"]).isRequired,
  children: PropTypes.node.isRequired,
};

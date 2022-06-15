import useScrollTop from "./hooks/useScrollTop";
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const routing = routes();
  useScrollTop();

  return <>{useRoutes(routing)}</>;
};

export default App;

import { Route, Routes } from "react-router-dom";

import { routes } from "../router/router";

const AppRouter = () => {
  console.log(routes);
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            element={route.component}
            path={route.path}
            exact={route.exact}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;

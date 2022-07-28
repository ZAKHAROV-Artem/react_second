import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import { private_routes, public_routes } from "../router/router";
import Loader from "../UI/loader/Loader";

const AppRouter = () => {
  const { is_auth, is_loading } = useContext(AuthContext);

  if (is_loading) {
    return <Loader />;
  }

  return is_auth ? (
    <Routes>
      {private_routes.map((route) => {
        return (
          <Route
            key={route.path}
            element={route.component}
            path={route.path}
            exact={route.exact}
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>
      {public_routes.map((route) => {
        return (
          <Route
            key={route.path}
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

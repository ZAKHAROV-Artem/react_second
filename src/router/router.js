import About from "../pages/About";
import Error from "../pages/Error";
import PostDetailItem from "../pages/PostDetailItem";
import Posts from "../pages/Posts";
import { Navigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export const private_routes = [
  { path: "/about", component: <About />, exact: false },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostDetailItem />, exact: true },
  { path: "/error", component: <Error />, exact: false },
  { path: "*", component: <Navigate to="/posts" />, exact: false },
];

export const public_routes = [
  { path: "/error", component: <Error />, exact: false },
  { path: "/login", component: <Login />, exact: false },
  { path: "/register", component: <Register />, exact: false },
  { path: "*", component: <Navigate to="/login" />, exact: false },
];

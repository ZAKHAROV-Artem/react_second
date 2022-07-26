import About from "../pages/About";
import Error from "../pages/Error";
import PostDetailItem from "../pages/PostDetailItem";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/about", component: <About />, exact: false },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostDetailItem />, exact: true },
  { path: "/error", component: <Error />, exact: false },
];

import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostDetailItem from "../pages/PostDetailItem";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="posts" element={<Posts />} />
      <Route path="about" element={<About />} />
      <Route exact path="posts/:id" element={<PostDetailItem />} />
    </Routes>
  );
};

export default AppRouter;

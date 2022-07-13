import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./css/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "JS 1", content: "Description" },
    { id: 1, title: "JS 2", content: "Description" },
    { id: 2, title: "JS 3", content: "Description" },
    { id: 3, title: "JS 4", content: "Description" },
    { id: 4, title: "JS 5", content: "Description" },
  ]);

  const createPost = (new_post) => {
    setPosts([...posts, new_post]);
  };
  const removePost = (post_id) => {
    setPosts(posts.filter((p) => p.id !== post_id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="JS post list" />
      ) : (
        <h2 className="no_posts_text">No posts, sorry :(</h2>
      )}
    </div>
  );
}

export default App;

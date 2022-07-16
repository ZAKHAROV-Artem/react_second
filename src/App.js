import { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import "./css/App.css";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "Python 1", content: "wow .py" },
    { id: 1, title: "Java 2", content: "oop java" },
    { id: 2, title: "JS 3", content: " aweb js" },
    { id: 3, title: "Ruby 4", content: "what ruby" },
    { id: 4, title: "Pascal 5", content: "mean man ps" },
  ]);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const createPost = (new_post) => {
    setPosts([...posts, new_post]);
  };
  const removePost = (post_id) => {
    setPosts(posts.filter((p) => p.id !== post_id));
  };

  const sorted_posts = useMemo(() => {
    console.log(`Hey I'm working`);
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sorted_and_searched_posts = useMemo(() => {
    return sorted_posts.filter((post) =>
      post.title.toUpperCase().includes(filter.query.toUpperCase())
    );
  }, [filter.query, sorted_posts]);
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sorted_and_searched_posts}
        title="JS post list"
      />
    </div>
  );
}

export default App;

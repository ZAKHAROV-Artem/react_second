import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelct";
import "./css/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: "Python 1", content: "wow .py" },
    { id: 1, title: "Java 2", content: "oop java" },
    { id: 2, title: "JS 3", content: "web js" },
    { id: 3, title: "Ruby 4", content: "what ruby" },
    { id: 4, title: "Pascal 5", content: "mean man ps" },
  ]);

  const [selected_sort, setSelectedSort] = useState("");

  const createPost = (new_post) => {
    setPosts([...posts, new_post]);
  };
  const removePost = (post_id) => {
    setPosts(posts.filter((p) => p.id !== post_id));
  };

  const sortPosts = (sort_by) => {
    setSelectedSort(sort_by);
    setPosts([...posts].sort((a, b) => a[sort_by].localeCompare(b[sort_by])));
    console.log(sort_by);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        value={selected_sort}
        onChange={sortPosts}
        default_value="Sort by"
        options={[
          { value: "title", name: "Sort by title" },
          { value: "content", name: "Sort by content" },
        ]}
      />

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="JS post list" />
      ) : (
        <h2 className="no_posts_text">No posts, sorry</h2>
      )}
    </div>
  );
}

export default App;

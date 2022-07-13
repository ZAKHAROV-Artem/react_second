import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", content: "" });

  const addPost = (e) => {
    e.preventDefault();
    const new_post = {
      ...post,
      id: Date.now(),
    };
    create(new_post);
    setPost({ title: "", content: "" });
  };

  return (
    <form className="add_post_form">
      <MyInput
        type="text"
        placeholder="Title..."
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <MyButton onClick={addPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;

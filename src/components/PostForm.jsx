import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

const PostForm = ({ posts_length, create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPost = (e) => {
    e.preventDefault();
    const new_post = {
      ...post,
      id: posts_length + 1,
    };
    create(new_post);
    setPost({ title: "", body: "" });
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
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;

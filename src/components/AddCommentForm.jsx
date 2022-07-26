import { useState } from "react";
import MyButton from "../UI/button/MyButton";

const AddCommentForm = ({ comments, setComments, post_id }) => {
  const [comment, setComment] = useState({
    postId: post_id,
    id: comments.length + 1,
    email: "Testmail@dfmail.com",
    body: "",
  });

  const addComment = (e) => {
    e.preventDefault();

    setComments([...comments, comment]);
  };

  return (
    <form className="add-post-comment">
      <textarea
        type="text"
        wrap="soft"
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
      />
      <MyButton onClick={addComment}>Add comment</MyButton>
    </form>
  );
};

export default AddCommentForm;

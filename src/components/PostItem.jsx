import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({ remove, post }) => {
  const router = useNavigate();
  const openDetails = () => {
    router("/posts/" + post.id);
  };

  return (
    <div className="post_item">
      <div className="post_text">
        <h3>
          {`${post.id}.`}
          {post.title}
        </h3>
        <div>{post.body}</div>
      </div>
      <div className="controls">
        <MyButton onClick={openDetails}>Open</MyButton>
        <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

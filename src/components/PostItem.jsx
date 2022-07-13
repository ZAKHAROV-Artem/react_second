import MyButton from "./UI/button/MyButton";

const PostItem = ({ number, remove, post }) => {
  console.log(post);
  return (
    <div className="post_item">
      <div className="post_text">
        <h3>
          {`${number + 1}.`}
          {post.title}
        </h3>
        <div>{post.content}</div>
      </div>
      <div className="controls">
        <MyButton onClick={() => remove(post.id)} className="btn_black">
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;

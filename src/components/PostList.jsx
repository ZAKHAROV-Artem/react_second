import PostItem from "./PostItem";

const PostList = ({ posts, title = "List of posts", remove }) => {
  const post_list = posts.map(({ id, title, content }, index) => {
    return (
      <PostItem
        remove={remove}
        number={index}
        post={{ id: id, title: title, content: content }}
      />
    );
  });

  return (
    <>
      <h3 className="post_list_title">{title}</h3>
      <div className="post_wrapper">{post_list}</div>
    </>
  );
};

export default PostList;
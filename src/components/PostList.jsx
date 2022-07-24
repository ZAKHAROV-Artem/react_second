import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title = "List of posts", remove }) => {
  if (!posts.length) {
    return <h2 className="no_posts_text">No posts, sorry</h2>;
  }

  return (
    <>
      <h3 className="post_list_title">{title}</h3>
      <div>
        <TransitionGroup>
          {posts.map((post) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
              className="post_wrapper"
            >
              <PostItem remove={remove} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default PostList;

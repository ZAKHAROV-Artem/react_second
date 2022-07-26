import AddCommentForm from "./AddCommentForm";
import { useFetching } from "../hooks/useFetching";
import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const [fetchCommentsByPostId, is_comments_loading, error] = useFetching(
    async (id) => {
      const response = await PostService.getCommentByPostId(postId);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchCommentsByPostId(postId);
  }, []);
  return (
    <div className="post-comments">
      <h2>Comments</h2>
      {is_comments_loading ? (
        <Loader />
      ) : (
        <div className="comments">
          {comments.map((comment, index) => {
            return (
              <div className="comment_item">
                <div className="item_name">
                  {index + 1}.{comment.email}
                </div>
                <div className="item_body">{comment.body}</div>
              </div>
            );
          })}
        </div>
      )}
      <AddCommentForm
        comments={comments}
        setComments={setComments}
        post_id={postId}
      />
    </div>
  );
};

export default PostComments;

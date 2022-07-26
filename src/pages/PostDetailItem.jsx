import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import PostComments from "../components/PostComments";

const PostDetailItem = () => {
  const params = useParams();

  const [post, setPost] = useState({});

  const [fetchPostsById, is_posts_loading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostsById(params.id);
  }, []);

  return (
    <div className="post_detail_wrapper">
      {is_posts_loading ? (
        <Loader />
      ) : (
        <>
          <div className="post_detail_title">
            <h1>{post.title}</h1>
          </div>
          <div className="post_detail">
            <div>
              <div className="post_detail_body">{post.body}</div>
              <PostComments postId={params.id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetailItem;

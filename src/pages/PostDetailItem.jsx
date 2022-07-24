import { useParams } from "react-router-dom";

const PostDetailItem = () => {
  const params = useParams();

  return <h1> hello id{params.id}</h1>;
};

export default PostDetailItem;

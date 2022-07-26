import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ margin: "100px 20px" }}>
      <h1>Something went wrong, sorry</h1>
      <Link to="/posts">Main page</Link>
    </div>
  );
};

export default Error;

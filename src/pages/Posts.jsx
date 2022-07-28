import { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "../css/App.css";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import MyButton from "../UI/button/MyButton";
import Loader from "../UI/loader/Loader";
import MyModal from "../UI/modal/MyModal";
import Pagination from "../UI/pagination/Pagination";
import { getPagesCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false);

  const [total_pages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page_number, setPageNumber] = useState(1);

  const [fetchPosts, is_posts_loading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page_number);
    setPosts([...posts, ...response.data]);
    const total_count = response.headers["x-total-count"];
    setTotalPages(getPagesCount(total_count, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page_number, limit]);

  const changePageNumber = (number) => {
    setPageNumber(number);
  };

  const createPost = (new_post) => {
    setPosts([...posts, new_post]);
    setModal(false);
  };
  const removePost = (post_id) => {
    setPosts(posts.filter((p) => p.id !== post_id));
  };

  const sorted_and_searched_posts = usePosts(posts, filter.sort, filter.query);

  const observing_element = useRef();
  const observer = useRef();

  useEffect(() => {
    if (is_posts_loading) return;
    if (observer.current) observer.current.disconnect();
    const callback = (entries) => {
      if (entries[0].isIntersecting && page_number < total_pages) {
        setPageNumber(page_number + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(observing_element.current);
  }, [is_posts_loading]);

  return (
    <div className="App">
      <MyButton
        onClick={() => setModal(true)}
        style={{ margin: "20px", marginTop: "80px" }}
      >
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm posts_length={posts.length} create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 20px" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        limit={limit}
        setLimit={setLimit}
      />
      {error && (
        <h2 className="no_posts_text">Something have gone wrong {error}</h2>
      )}
      <PostList
        remove={removePost}
        posts={sorted_and_searched_posts}
        title="JS post list"
      />
      <div ref={observing_element} style={{ height: "30px" }}></div>
      {is_posts_loading && <Loader></Loader>}

      {/* <Pagination
        total_pages={total_pages}
        changePageNumber={changePageNumber}
        page_number={page_number}
      /> */}
    </div>
  );
}

export default Posts;

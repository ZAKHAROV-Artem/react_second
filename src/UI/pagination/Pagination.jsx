import MyButton from "../button/MyButton";
import { usePagination } from "../../hooks/usePagination";

const Pagination = (props) => {
  const pages_array = usePagination(props.total_pages);
  return (
    <div style={{ margin: "0 20px", marginBottom: "80px" }}>
      {pages_array.map((p) => (
        <MyButton
          onClick={() => props.changePageNumber(p)}
          key={p}
          className={p === props.page_number ? "page_btn current" : "page_btn"}
        >
          {p}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;

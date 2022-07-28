import SortSelect from "../UI/Sorting/select/SortSelect";
import SortInput from "../UI/Sorting/input/SortInput";

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <fieldset className="sorting_fieldset">
      <legend>Sorting</legend>
      <SortSelect
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        default_value="Sort by"
        options={[
          { value: "title", name: "Sort by title" },
          { value: "body", name: "Sort by content" },
        ]}
      />
      <SortInput
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SortSelect
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        default_value="Set load limit"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "All" },
        ]}
      />
    </fieldset>
  );
};

export default PostFilter;

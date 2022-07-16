import SortSelect from "./UI/Sorting/select/SortSelect";
import SortInput from "./UI/Sorting/input/SortInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <fieldset className="sorting_fieldset">
      <legend>Sorting</legend>
      <SortSelect
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        default_value="Sort by"
        options={[
          { value: "title", name: "Sort by title" },
          { value: "content", name: "Sort by content" },
        ]}
      />
      <SortInput
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </fieldset>
  );
};

export default PostFilter;

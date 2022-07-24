import st from "./SortSelect.module.css";
const SortSelect = ({ options, default_value, value, onChange }) => {
  return (
    <select className={st.my_select} value={value} onChange={onChange}>
      <option value="" disabled>
        {default_value}
      </option>
      {options.map((options) => (
        <option key={options.value} value={options.value}>
          {options.name}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;

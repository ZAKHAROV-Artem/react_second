const MySelect = ({ options, default_value, value, onChange }) => {
  return (
    <fieldset className="sorting_fieldset">
      <legend>Sorting</legend>
      <select
        className="my_select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {default_value}
        </option>
        {options.map((options) => (
          <option key={options.value} value={options.value}>
            {options.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default MySelect;

import st from "./SortInput.module.css";

const SortInput = ({ onChange, ...props }) => {
  return <input {...props} className={st.sort_input} onChange={onChange} />;
};

export default SortInput;

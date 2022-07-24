import st from "./MyInput.module.css";

const MyInput = ({ ...props }) => {
  return <input {...props} className={st.my_input} />;
};

export default MyInput;

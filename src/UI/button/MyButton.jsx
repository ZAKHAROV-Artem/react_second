import st from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button className={st.btn_black} {...props}>
      {children}
    </button>
  );
};

export default MyButton;

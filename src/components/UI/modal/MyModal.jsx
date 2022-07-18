import st from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  let classes = [st.mymodal];
  if (visible) {
    classes.push(st.active);
  }

  return (
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div className={st.mymodal_content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;

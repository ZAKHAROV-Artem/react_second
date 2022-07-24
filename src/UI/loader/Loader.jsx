import st from "./Loader.module.css";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
      <div className={st.loader}></div>
    </div>
  );
};

export default Loader;

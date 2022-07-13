const MyButton = ({ children, ...props }) => {
  return (
    <button className="btn_black" {...props}>
      {children}
    </button>
  );
};

export default MyButton;

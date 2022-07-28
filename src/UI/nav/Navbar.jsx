import { NavLink } from "react-router-dom";
import st from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const Navbar = () => {
  const generateClassNames = ({ isActive }) => {
    return isActive
      ? `${st.item_link} ${st.item_link_active}`
      : `${st.item_link}`;
  };
  const { is_auth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("is_auth");
  };
  return (
    <nav className={st.nav}>
      <ul className={st.list}>
        <li className={st.item}>
          <NavLink to="/posts" className={generateClassNames}>
            posts
          </NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/about" className={generateClassNames}>
            about
          </NavLink>
        </li>
      </ul>
      {is_auth ? (
        <ul className={st.list}>
          <li className={st.item}>
            <NavLink
              to="/login"
              onClick={logout}
              className={generateClassNames}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={st.list}>
          <li className={st.item}>
            <NavLink to="/login" className={generateClassNames}>
              Login
            </NavLink>
          </li>
          <li className={st.item}>
            <NavLink to="/register" className={generateClassNames}>
              Register
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import st from "./Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  return (
    <nav className={st.nav}>
      <ul className={st.list}>
        <li className={st.item}>
          <Link to="/posts" className={st.item_link}>
            posts
          </Link>
        </li>
        <li className={st.item}>
          <Link to="/about" className={st.item_link}>
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

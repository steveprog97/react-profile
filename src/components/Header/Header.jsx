import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/Barclays-Logo.png?auto=format&q=60&w=1000&h=1000&fit=crop&crop=faces" />
    </header>
  );
};

export default Header;

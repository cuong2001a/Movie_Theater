import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LIST_CATEGORIES } from "../../../constant";
import { ItemCategory } from "../../../constant/models";
import classes from "./header.module.scss";
const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("/");
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    <React.Fragment>
      <div className={classes.header}>
        <nav className={classes.menu}>
          <Link to={"/"}>
            <img
              src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
              alt="Logo App"
              className={classes.menu__logo}
            />
          </Link>
          <ul className={classes.nav}>
            {LIST_CATEGORIES?.map((item: ItemCategory, index: number) => {
              return (
                <li
                  onClick={() => setActiveMenu(item.path)}
                  className={classes.nav__item}
                  key={item.id}
                >
                  <NavLink
                    className={
                      activeMenu === item.path
                        ? classes.nav__linkActive
                        : classes.nav__link
                    }
                    to={item.path}
                  >
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Link to="/signin" className={classes.btn__signIn}>
            Đăng nhập
          </Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import styles from "./Navigation.module.css";
import ProfileLinks from "./profiles";

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);
  
    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <>
          <ProfileLinks />
          <ProfileButton user={sessionUser} />
        </>
      );
    } else {
      sessionLinks = (
        <div>
          <span className={styles.loginModal}>
            <LoginFormModal />
          </span>
        </div>
      );
    }
    return (
      <nav className={styles.container}>
        <NavLink activeClassName={styles.activeNav} exact to="/">
        </NavLink>
        {isLoaded && sessionLinks}
      </nav>
    );
  };
  export default Navigation;
  
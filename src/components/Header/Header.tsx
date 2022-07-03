import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import styles from "./index.module.css";
import { ReactComponent as Menu } from "./menu.svg";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.menu}>
        <Menu onClick={toggle} />
      </div>
      {active ? <NavBar onClickClose={toggle} /> : null}
    </nav>
  );
};

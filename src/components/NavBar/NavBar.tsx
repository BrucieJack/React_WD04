import { useEffect } from "react";
import { ReactComponent as Close } from "./close.svg";
import styles from "./index.module.css";

interface IProps {
  onClickClose: () => void;
}

export const NavBar = ({ onClickClose }: IProps) => {
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <Close onClick={onClickClose} />
        </div>
      </div>
    </div>
  );
};

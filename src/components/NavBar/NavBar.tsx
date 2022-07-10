import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { Button } from "../Button/Button";
import { ReactComponent as Close } from "./close.svg";
import styles from "./index.module.css";

interface IProps {
  onClickClose: () => void;
}

export const NavBar = ({ onClickClose }: IProps) => {
  const context = useContext(Context);
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
        <Link to="/login">
          <Button text="Login" onClick={() => {}} disabled={false} />
        </Link>
        <Button
          text={context.isDark ? "День" : "Ночь"}
          disabled={false}
          onClick={() => {
            context.setIsDark(!context.isDark);
          }}
        />
        <Link to="/registration">Sign Up</Link>
      </div>
    </div>
  );
};

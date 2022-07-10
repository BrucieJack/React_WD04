import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/ThemeContext";
import { Button } from "../Button";
import { ReactComponent as Close } from "./close.svg";
import styles from "./index.module.css";

interface IProps {
  onClickClose: () => void;
}

export const NavBar = ({
  onClickClose,
}: IProps) => {
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  const context = useContext(Context);

  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <Close onClick={onClickClose} />
        </div>
        <Link to="/login" onClick={onClickClose}>
          <Button
            text="Login"
            onClick={() => {}}
            disabled={false}
          />
        </Link>
        <Button
          text={context.isDark ? "День" : "Ночь"}
          disabled={false}
          onClick={() => {
            context.setIsDark(!context.isDark);
          }}
        />
      </div>
    </div>
  );
};

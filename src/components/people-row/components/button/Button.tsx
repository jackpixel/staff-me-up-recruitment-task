import React from "react";
import styles from "./Button.module.css";

const BUTTON_TYPE = {
  pass: "pass",
  shortlist: "shortlist"
};

type ButtonProps = {
  type: "pass" | "shortlist";
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({ type, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    <span
      className={
        type === BUTTON_TYPE.pass
          ? styles["icon-x-sign"]
          : styles["icon-plus-sign"]
      }
    />
    <span>{type}</span>
  </button>
);

export default Button;

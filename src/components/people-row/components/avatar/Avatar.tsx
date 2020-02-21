import React from "react";
import styles from "./Avatar.module.css";
import ProgressRing from "../progress-ring";

type AvatarProps = {
  url: string;
  progress?: number;
};

const Avatar: React.FunctionComponent<AvatarProps> = ({ progress, url }) =>
  typeof progress !== "undefined" ? (
    <div className={styles.wrapper}>
      <div className={styles["wrapper-inner"]}>
        <ProgressRing progress={progress} stroke={2} radius={44} />
        <img
          className={styles["image-with-progress"]}
          src={url}
          alt="user avatar"
          title="user avatar"
        />
      </div>
      <div className={styles.match}>{progress}% match</div>
    </div>
  ) : (
    <img
      className={styles["image-only"]}
      src={url}
      alt="user avatar"
      title="user avatar"
    />
  );

export default Avatar;

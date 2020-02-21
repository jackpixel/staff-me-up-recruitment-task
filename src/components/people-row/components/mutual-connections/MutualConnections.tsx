import React from "react";
import styles from "./MutualConnections.module.css";
import Avatar from "../avatar";
import mutualAvatar from "../../assets/mutual-connections-avatar.png"

type MutualConnectionsProps = {
  items: string[];
  maxVisibleConnections: number;
};

const MutualConnections: React.FunctionComponent<MutualConnectionsProps> = ({
  items,
  maxVisibleConnections,
}) => (
  <div className={styles["mutual-conntections"]}>
    {items.slice(0, maxVisibleConnections).map((_item, idx) => (
      <div className={styles.item} key={idx}>
        <Avatar url={mutualAvatar} />
      </div>
    ))}
    {items.length > maxVisibleConnections && (
      <div className={styles["item-last"]}>+{items.length - maxVisibleConnections}</div>
    )}
  </div>
);

export default MutualConnections;

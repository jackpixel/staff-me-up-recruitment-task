import React from "react";
import styles from "./DetailsFooter.module.css";
import { Data } from "../../../../data/mocks";
import MutualConnections from "../mutual-connections";

type DetailsFooterProps = {
  data: Data;
};

const DetailsFooter: React.FunctionComponent<DetailsFooterProps> = ({
  data
}) => (
  <footer className={styles["footer-details"]}>
    <div className={styles["footer-item"]}>
      <span>mutual connections</span>
      <MutualConnections
        maxVisibleConnections={5}
        items={Array(8).fill(null)}
      />
    </div>
    <div className={styles["footer-item"]}>
      <span>relevant credits</span>
      <span className={styles.counter}>{data.relevantCreditsCount}</span>
    </div>
  </footer>
);

export default DetailsFooter;

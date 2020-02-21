import React from "react";
import styles from "./Experience.module.css";
import { Data } from "../../../../data/mocks";

type ExperienceProps = {
  data: Data;
};

const Experience: React.FunctionComponent<ExperienceProps> = ({ data }) => (
  <div className={styles.experience}>
    {Array(data.jobs.length * 3)
      .fill(data.jobs[0])
      .map((item, idx) => (
        <div key={idx} className={styles["experience-item"]}>
          <h3 className={styles.title}>
            {item.title}
            <span className={styles.production}> - {item.production}</span>
          </h3>
          <span className={styles.year}>{item.year}</span>
          <span className={styles.genre}>{item.genre}</span>
          <span className={styles.genre}>{item.channel}</span>
        </div>
      ))}
  </div>
);

export default Experience;

import React from "react";
import styles from "./ProgressCircle.module.css";

type ProgressCirlceProps = {
  radius: number;
  stroke: number;
  progress: number;
};

const ProgressCirlce: React.FunctionComponent<ProgressCirlceProps> = ({
  radius,
  stroke,
  progress
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        className={styles.circle}
        stroke="#E1E3EA"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={1000}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className={styles.circle}
        stroke="#92C0E8"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default ProgressCirlce;

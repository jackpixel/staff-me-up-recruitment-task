import React from "react";
import styles from "./PeopleRow.module.css";
import Avatar from "./components/avatar";
import { Data } from "../../data/mocks";
import Button from "./components/button";
import Experience from "./components/experience";
import DetailsFooter from "./components/details-footer";
import userAvatar from "./assets/user-avatar.png"

type PeopleRowProps = {
  data: Data;
  onClose?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const PeopleRow: React.FunctionComponent<PeopleRowProps> = ({
  data,
  onClose
}) => (
  <div className={styles["people-row"]}>
    <div className={styles.general}>
      <button onClick={onClose} className={styles.close} />
      <div className={styles["general-inner"]}>
        <Avatar url={userAvatar} progress={data.matchPercentage} />
        <h3 className={styles.name}>{data.name}</h3>
        <h4 className={styles.location}>{data.location}</h4>
        <p className={styles.about}>{data.about}</p>
      </div>
      <footer className={styles.footer}>
        <Button type="pass" />
        <Button type="shortlist" />
      </footer>
    </div>
    <div className={styles.details}>
      <Experience data={data} />
      <DetailsFooter data={data} />
    </div>
  </div>
);

export default PeopleRow;

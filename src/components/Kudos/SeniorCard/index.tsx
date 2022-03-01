import React from "react";
import styles from "./styles.module.css";
import { Text } from "pinus-ui-library";

export interface SeniorProps {
  name: string;
  seniorUrl: string;
}

const SeniorCard = ({ name, seniorUrl }: SeniorProps) => {
  return (
    <button onClick={() => (location.href = seniorUrl)}>
      <div className={styles.card}>
        <div className={styles.name}>
          <Text fontSize="2xl" fontWeight="bold">
            {name}
          </Text>
        </div>
        <div className={styles.link}>
          <Text> Send your well wishes! </Text>
        </div>
      </div>
    </button>
  );
};

export default SeniorCard;

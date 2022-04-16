import React from "react";
import styles from "./styles.module.css";
import { Text } from "pinus-ui-library";

export interface SeniorProps {
  name: string;
  faculty: string[];
  seniorUrl: string;
  gradYear: string; // Currently, this field is not used, but it's a convenient field to have
}

const SeniorCard = ({ name, faculty, seniorUrl }: Partial<SeniorProps>) => {
  return (
    <button onClick={() => (location.href = seniorUrl)}>
      <div className={styles.card}>
        <div className={styles.name}>
          <Text fontSize="2xl" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="lg">{faculty.join(", ")}</Text>
        </div>
        <div className={styles.link}>
          <Text> Send your well wishes! </Text>
        </div>
      </div>
    </button>
  );
};

export default SeniorCard;

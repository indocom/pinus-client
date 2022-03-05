import React from "react";
import styles from "./styles.module.css";
import { Text } from "pinus-ui-library";

export interface SeniorProps {
  name: string;
  faculty: string[];
  seniorUrl: string;
  gradYear: string;
}

const SeniorCard = ({ name, faculty, seniorUrl, gradYear }: SeniorProps) => {
  console.log(faculty);
  return (
    <button onClick={() => (location.href = seniorUrl)}>
      <div className={styles.card}>
        <div className={styles.name}>
          <Text fontSize="2xl" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="lg">{faculty.join(", ")}</Text>
          <Text fontSize="sm" fontWeight="bold">
            {gradYear}
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

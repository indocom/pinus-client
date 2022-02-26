import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { Text } from "pinus-ui-library";

export interface SeniorProps {
  name: string;
  seniorUrl: string;
}

const SeniorCard = ({ name, seniorUrl }: SeniorProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
      </div>
      <Link href={seniorUrl}>
        <div className={styles.link}>
          <Text color="blue"> Send your well wishes! </Text>
        </div>
      </Link>
    </div>
  );
};

export default SeniorCard;

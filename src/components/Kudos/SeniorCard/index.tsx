import React from "react";
import styles from "./styles.module.css";
import { Text } from "pinus-ui-library";
import { GenericCard } from "../GenericCard";

export interface SeniorProps {
  name: string;
  faculty: string[];
  seniorUrl: string;
  gradYear: string; // Currently, this field is not used, but it's a convenient field to have
}

export interface PlainCardProps {
  title: string;
  description?: string[];
}

export const CardTitle = ({ title, description }: PlainCardProps) => (
  <div className={styles.name}>
    <Text fontSize="2xl" fontWeight="bold">
      {title}
    </Text>
    {description && <Text fontSize="lg">{description.join(", ")}</Text>}
  </div>
);

const SeniorCard = ({ name, faculty, seniorUrl }: Partial<SeniorProps>) => {
  return (
    <button onClick={() => (location.href = seniorUrl)}>
      <GenericCard>
        <CardTitle title={name} description={faculty} />
        <div className={styles.link}>
          <Text> Send your well wishes! </Text>
        </div>
      </GenericCard>
    </button>
  );
};

export default SeniorCard;

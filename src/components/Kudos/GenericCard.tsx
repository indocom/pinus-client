import styles from "./SeniorCard/styles.module.css";
import React from "react";

export const GenericCard = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

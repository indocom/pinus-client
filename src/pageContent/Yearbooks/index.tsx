import React from "react";
import { yearbooks } from "../../data/yearbook/data";
import { GenericCard } from "../../components/Kudos/GenericCard";
import { CardTitle } from "../../components/Kudos/SeniorCard";
import * as S from "./styles";
import styles from "./styles.module.css";

export const YearbookContent = () => {
  return (
    <div className={`bg-blue-900`}>
      <div className={S.Container}>
        {Object.entries(yearbooks).map(([year, data]) => (
          <div className={styles.card} key={year}>
            <a href={data.url}>
              <GenericCard>
                <div className={S.Header}></div>
                <CardTitle title={data.theme} description={[year]} />
              </GenericCard>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

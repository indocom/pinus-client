import React from "react";
import { Text } from "pinus-ui-library";
import ContentCard from "./ContentCard";
import styles from "./styles.module.css";
import { LocalKudo } from "src/utils/contentful/types";

function reorder(original: LocalKudo[]): LocalKudo[][] {
  const ans = [[], [], []];
  const lengths = [0, 0, 0];
  for (let i = 0; i < original.length; i++) {
    const minimum = Math.min(...lengths);
    const which_col = lengths.indexOf(minimum);
    lengths[which_col] = lengths[which_col] + original[i].text.length;
    ans[which_col] = ans[which_col].concat(original[i]);
  }
  return ans;
}

const KudosContent = (props) => {
  const Kudos: LocalKudo[] = props.kudos.contents;
  const hasKudos = Kudos !== undefined;
  console.log(reorder(Kudos));
  const Kudos_reordered = reorder(Kudos);
  return (
    <>
      {hasKudos && (
        <div className={styles.container}>
          {Kudos_reordered.map((column) => (
            <div className={styles.column}>
              {column.map(
                (kudo) => {
                  console.log(kudo);
                  return (
                  <div className={styles.kudo}>
                    <ContentCard description={kudo.text} from={kudo.writer} image={kudo.imageUrl}/>
                  </div>
                )
              }
              )}
            </div>
          ))}
        </div>
      )}
      {!hasKudos && (
        <div className={`container text-center`}>
          <Text>Be the first to give Kudos to {props.person}</Text>
        </div>
      )}
    </>
  );
};
export default KudosContent;

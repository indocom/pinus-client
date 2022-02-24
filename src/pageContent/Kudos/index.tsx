import React from "react";
import { Content, Text } from "pinus-ui-library";
import ContentCard from "./ContentCard";
import styles from "./styles.module.css";
import { getPeopleSlugsFromKudoboard } from "src/utils/contentful/kudo_read";
import SeniorCard, { SeniorProps } from "./Senior";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

function nameToURL(name: string) {
  const url: string = ("/kudos/" + name.toLowerCase().replaceAll(" ", "-"));
  return url;
}

export const Seniors = (props) => {
  React.useEffect(() => {
    async function getNames() {
      const names: string[]= await getPeopleSlugsFromKudoboard();
      setData(names);
    }
    getNames();
  }, [])

  const [data, setData] = React.useState<Array<string>>();
  if (!data) {
    return <div></div>;
  }

  const testData: Array<SeniorProps> = data.map((x) => {
    return {
      name: x,
      seniorUrl: nameToURL(x)
    }
  });

  return (
    <>
      {testData.map(data => {
        console.log(data);
        return (
          <div>
              <div className={styles.kudo}>
                <SeniorCard name = {data.name} seniorUrl = {data.seniorUrl}></SeniorCard>
              </div>
          </div>

        );
      })}
    </>
  );
};

interface Kudo {
  text: string;
  writer: string;
}

function reorder(original: Kudo[]) {
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
  const Kudos: Kudo[] = props.kudos.contents;
  const hasKudos = Kudos !== undefined;
  console.log(reorder(Kudos));
  const Kudos_reordered = reorder(Kudos);
  return (
    <>
      {hasKudos && (
        <div className={styles.container}>
          {Kudos_reordered.map((column) => (
            <div className={styles.column}>
              {column.map((kudo) => (
                <div className={styles.kudo}>
                  <ContentCard description={kudo.text} from={kudo.writer} />
                </div>
              ))}
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

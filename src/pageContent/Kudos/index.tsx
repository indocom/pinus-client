import React, { useEffect, useState } from "react";
import { Text } from "pinus-ui-library";
import ContentCard from "./ContentCard";
import styles from "./styles.module.css";
import { LocalKudo } from "src/utils/contentful/types";
import SanWrite from "src/pages/sanWrite";
import SanWriteContent from "../SanWrite";

function reorder(original: LocalKudo[]): LocalKudo[][] {
  // LocalKudo divided into 3 roughly equal columns
  const ans = [[], [], []];

  // Current estimate of column length
  const lengths = [0, 0, 0];

  for (let i = 0; i < original.length; i++) {
    const height =
      original[i].image === null
        ? 0
        : original[i].image.fields.file.details.image.height;
    const width =
      original[i].image === null
        ? 0
        : original[i].image.fields.file.details.image.width;
    const weighted_height =
      original[i].image === null ? 0 : (height / width) * 12;

    // Find which column is minimum
    const minimum = Math.min(...lengths);
    const which_col = lengths.indexOf(minimum);

    // Updating the length estimates
    lengths[which_col] =
      lengths[which_col] +
      Math.floor(original[i].text.length / 60) +
      5 +
      weighted_height;

    // Putting the new LocalKudo into the correct column
    ans[which_col] = ans[which_col].concat(original[i]);
  }
  return ans;
}
const ModalWindow = ({isShown, setIsShown, kudos, setKudos, slug})=>{

  const handleClick = ()=>{
    setIsShown(!isShown);
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className="close" onClick={handleClick}> X </button>
          <SanWriteContent isShown={isShown} setIsShown={setIsShown} kudos={kudos} setKudos={setKudos} slug={slug}/>
      </div>
    </div>
  )
}
const KudosContent = (props) => {
  
  const Kudos: LocalKudo[] = props.kudos.contents;
  const hasKudos = Kudos !== undefined;
  const[data, setKudos] = useState(Kudos);
  const [isShown, setIsShown] = useState(false);
  const Kudos_reordered = hasKudos ? reorder(Kudos) : null;
  const slug = props.person;
  let name: string = props.person as string;
  name = name
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  

  return (
    <>
      <div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=> {setIsShown(!isShown);}}>Wish to {name} </button>
        </div>
        {isShown ? <ModalWindow isShown={isShown} setIsShown={setIsShown} kudos={data} setKudos={setKudos} slug={name} /> : null}
      </div>
      {hasKudos && (
        <div className={styles.container}>
          {Kudos_reordered.map((column) => (
            <div className={styles.column}>
              {column.map((kudo) => {
                console.log(kudo);
                return (
                  <div className={styles.kudo}>
                    <ContentCard
                      description={kudo.text}
                      from={kudo.writer}
                      image={kudo.imageUrl}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
      {!hasKudos && (
        <div className={styles.container}>
          <ContentCard
            description={
              name +
              " has not gotten any well wishes. Be the first to send your well wishes to " +
              name +
              "!"
            }
            from="admin"
          />
          <div>
            <div className="btn" onClick={()=> {setIsShown(!isShown)}}>
              <button>Wish to {name} </button>
            </div>
            {isShown ? <ModalWindow isShown={isShown} setIsShown={setIsShown} kudos={data} setKudos={setKudos} slug={slug} /> : null}
          </div>
        </div>
      )}
    </>
  );
};
export default KudosContent;
import React from "react";
import styles from "./styles.module.css";

export interface ContentCardProps {
  /**
   * Description of ContentCard
   */
  description: string;

  /**
   * From who
   */
  from: string;

  /**
   * Url to image
   */
  image?: string;

  /**
   * Alt text for image. Compulsory field if image field is present
   */
  imgAlt?: string;
}

const ContentCard = ({
  image,
  imgAlt,
  description,
  from,
}: ContentCardProps) => {
  return (
    <div className={styles.card}>
      {/* <div className={styles.imageCard}>
        {image ? <img className={"imgcard"} src={image} alt={imgAlt} /> : <></>}
      </div> */}
      <div className={styles.description}>{description}</div>
      <p>&nbsp;</p>
      <div className={styles.from}>from {from}</div>
    </div>
  );
};

export default ContentCard;

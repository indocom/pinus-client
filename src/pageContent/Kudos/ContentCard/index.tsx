import React from "react";
import styles from "./styles.module.css";
import { Text } from "pinus-ui-library";

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
      {image && (
        <div>
          <img className={styles.imgcard} src={image} alt={imgAlt} />
          <p>&nbsp;</p>
          <hr />
          <p>&nbsp;</p>
        </div>
      )}
      <Text> {description} </Text>
      <p>&nbsp;</p>
      <div className={styles.from}>
        <Text color="gray"> from {from} </Text>
      </div>
    </div>
  );
};

export default ContentCard;

import React from "react";
import { Content, ContentCard} from "pinus-ui-library";
import { getPeopleKudos } from "src/utils/contentful/kudo_read";
import { ContentfulKudos } from "src/utils/contentful/types";


const KudosContent = (props) => {
    const Kudos = props.kudos.contents;
    return (
      <>
      <div>
        {Kudos.map(kudo => <ContentCard hyperlink="" title={kudo.text} description={kudo.writer}/>)}
      </div>
      </>
    );
  };
  export default KudosContent;
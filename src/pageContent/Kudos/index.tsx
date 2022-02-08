import React from "react";
import { Content, ContentCard} from "pinus-ui-library";
import { getPeopleKudos } from "src/utils/contentful/kudo_read";
import { ContentfulKudos } from "src/utils/contentful/types";


const KudosContent = (props) => {
    const Kudos = props.kudos.contents;
    return (
      <>
      <div className={`container mx-auto flex`}>  
        {Kudos.map(kudo =>
          <div className={`flex-1 min-w-0 m-10`}>
              <ContentCard hyperlink="" title={kudo.text} description={kudo.writer}/>
          </div>
          )} 
      </div>
      
      </>
    );
  };
  export default KudosContent;
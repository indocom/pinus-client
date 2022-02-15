import React from "react";
import { Content, ContentCard, Text} from "pinus-ui-library";


const KudosContent = (props) => {
    const Kudos = props.kudos.contents;
    const hasKudos = Kudos !== undefined;
    return (<>
      {hasKudos && 
        <div className={`container mx-auto flex flex-wrap justify-evenly mt-4 gap-4`}>  
          {Kudos.map(kudo =>
            <div className={`flex-1 min-w-0`}>
              <ContentCard hyperlink="" title={kudo.text} description={kudo.writer}/>
            </div>
          )}
        </div>
      }
      {
        !hasKudos && 
        <div className={`container text-center`}>
          <Text>
            Be the first to give Kudos to {props.person}
          </Text>
        </div>
      } 
      </>
    );
  };
  export default KudosContent;
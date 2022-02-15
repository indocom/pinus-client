import { NextPage } from 'next'
import Page from 'src/components/Page'
import {Text} from "pinus-ui-library"

const KudosNotFound : NextPage = () => {
    return (
      <Page
        bgImage=""
        title="Kudos"
        subBanner
        description={`There is no-one here`}
      >
          <div className="text-center">
            <Text> Person Not Found Sadge :( </Text>
          </div>
        
      </Page>
        
    )
}
export default KudosNotFound
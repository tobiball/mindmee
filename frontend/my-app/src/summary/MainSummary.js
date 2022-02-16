import { 
  Route, 
  Switch
} from "react-router-dom";

import SummaryOverview from "./SummaryOverview"

import MoodSummaryDetail from "./MoodSummaryDetail"
import JournalSummaryDetail from "./JournalSummaryDetail"
import TagsSummaryDetail from "./TagsSummaryDetail"


export default function MainSummary() {
  return (
    <div>
      <Switch>
          <Route path="/summary/MainSummary" component={SummaryOverview} />
          <Route path="/summary/MoodSummaryDetail" component={MoodSummaryDetail} />
          <Route path="/summary/JournalSummaryDetail" component={JournalSummaryDetail} />
                    <Route path="/summary/TagsSummaryDetail" component={TagsSummaryDetail} />

        </Switch>
    </div>
  )
}
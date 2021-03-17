import { Link } from "react-router-dom";

import MoodSummary from "./MoodSummary"
import TagsSummary from "./TagsSummary"
import JournalSummary from "./JournalSummary"


export default function MainSummary() {

  return (
    <div>
      <h1>This is Main Summary</h1>
      <MoodSummary />
      <TagsSummary />
      <JournalSummary />
    </div>
  )
}
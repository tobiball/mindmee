
import { 
  Route, 
  Switch
} from "react-router-dom";

import MoodEntry from "./MoodEntry"
import TagsEntry from "./TagsEntry"
import JournalEntry from "./JournalEntry"

export default function MainEntry() {
  return (
    <div>
      <h1>This is Main Entry</h1>
      <Switch>
        <Route path="/entry/MainEntry" component={MoodEntry} />
        <Route path="/entry/TagsEntry" component={TagsEntry} />
        <Route path="/entry/JournalEntry" component={JournalEntry} />

      </Switch>
  </div>
    
  )
}



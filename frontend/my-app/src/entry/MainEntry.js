import { 
  Route, 
  Switch
} from "react-router-dom";

import MoodEntry1 from "./Mood/MoodEntry1"
import MoodEntry2 from "./Mood/MoodEntry2"
import MoodEntry3 from "./Mood/MoodEntry3"
import MoodEntry4 from "./Mood/MoodEntry4"

import TagsEntry from "./TagsEntry"
import JournalEntry from "./JournalEntry"


export default function MainEntry() {
  return ( 
    <div>
      {/* <h1 className="master-headline">This is Main Entry</h1> */}
      <Switch>
        <Route path="/entry/MainEntry" component={MoodEntry1} />
        <Route path="/entry/Mood/MoodEntry2" component={MoodEntry2} />
        <Route path="/entry/Mood/MoodEntry3" component={MoodEntry3} />
        <Route path="/entry/Mood/MoodEntry4" component={MoodEntry4} />
        <Route path="/entry/TagsEntry" component={TagsEntry} />
        <Route path="/entry/JournalEntry" component={JournalEntry} />
      </Switch>
  </div>
    
  )
}



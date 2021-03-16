
import { 
  Route, 
  Switch,
  Link,
  Redirect,
  BrowserRouter as Router 
} from "react-router-dom";

import MoodEntry from "./MoodEntry"
import TagsEntry from "./TagsEntry"
import JournalEntry from "./JournalEntry"




export default function MainEntry() {
  return (
    <div>
      <h1>This is Main Entry</h1>
      <Router>
        <Switch>
          <Route exact path="/entry/MainEntry" component={MoodEntry} />
          <Route exact path="/entry/TagsEntry" component={TagsEntry} />
          <Route exact path="/entry/JournalEntry" component={JournalEntry} />
        </Switch>
      </Router>
  </div>
    
  )
}



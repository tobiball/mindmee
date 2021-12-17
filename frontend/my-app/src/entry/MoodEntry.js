import { 
  Route, 
  Switch,
} from "react-router-dom";


import MoodEntry1 from "./Mood/MoodEntry1"
import MoodEntry2 from "./Mood/MoodEntry2"
import MoodEntry3 from "./Mood/MoodEntry3"
import MoodEntry4 from "./Mood/MoodEntry4"

export default function MoodEntry() {
  return (
    <div>
      <h2>This is Mood Entry</h2> 
      <Switch>
        <Route path="/" component={MoodEntry1} />
        <Route path="/entry/Mood/MoodEntry2" component={MoodEntry2} />
        <Route path="/entry/Mood/MoodEntry3" component={MoodEntry3} />
        <Route path="/entry/Mood/MoodEntry4" component={MoodEntry4} />
      </Switch>
    </div>
  )
}
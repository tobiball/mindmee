import './App.css';

import { 
  Route, 
  Switch,
  Link,
  Redirect,
  BrowserRouter as Router 
} from "react-router-dom";

import MainPage from "./MainPage"

import MainEntry from "./entry/MainEntry"
import MoodEntry from "./entry/MoodEntry"
import TagsEntry from "./entry/TagsEntry"
import JournalEntry from "./entry/JournalEntry"

import MainSummary from "./summary/MainSummary"
import MoodSummary from "./summary/MoodSummary"
import TagsSummary from "./summary/TagsSummary"
import JournalSummary from "./summary/JournalSummary"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/entry/MainEntry" component={MainEntry} />
        <Route exact path="/entry/MoodEntry" component={MoodEntry} />
        <Route exact path="/entry/TagsEntry" component={TagsEntry} />
        <Route exact path="/entry/JournalEntry" component={JournalEntry} />

        <Route exact path="/summary/MainSummary" component={MainSummary} />
        <Route exact path="/summary/MoodSummary" component={MoodSummary} />
        <Route exact path="/summary/TagsSummary" component={TagsSummary} />
        <Route exact path="/summary/JournalSummary" component={JournalSummary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
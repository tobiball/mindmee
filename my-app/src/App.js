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
import MoodSummaryDetail from "./summary/MoodSummaryDetail"
import TagsSummary from "./summary/TagsSummary"
import TagsSummaryDetail from "./summary/TagsSummaryDetail"
import JournalSummary from "./summary/JournalSummary"
import JournalSummaryDetail from "./summary/JournalSummaryDetail"
import Navigation from './Navigation';




function App() {



  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/entry/MainEntry" component={MainEntry} />
        <Route exact path="/entry/MoodEntry" component={MoodEntry} />
        <Route exact path="/entry/TagsEntry" component={TagsEntry} />
        <Route exact path="/entry/JournalEntry" component={JournalEntry} />

        <Route exact path="/summary/MainSummary" component={MainSummary} />
        <Route exact path="/summary/MoodSummary" component={MoodSummary} />
        <Route exact path="/summary/MoodSummaryDetail" component={MoodSummaryDetail} />
        <Route exact path="/summary/TagsSummary" component={TagsSummary} />
        <Route exact path="/summary/TagsSummaryDetail" component={TagsSummaryDetail} />
        <Route exact path="/summary/JournalSummary" component={JournalSummary} />
        <Route exact path="/summary/JournalSummaryDetail" component={JournalSummaryDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
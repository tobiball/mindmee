import './App.css';

import { 
  Route, 
  Switch,
} from "react-router-dom";

import MainPage from "./MainPage"

import MainEntry from "./entry/MainEntry"

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
        <Switch>
          <Route path="/entry" component={MainEntry} />
          <Route path="/summary/MainSummary" component={MainSummary} />
          <Route path="/summary/MoodSummary" component={MoodSummary} />
          <Route path="/summary/MoodSummaryDetail" component={MoodSummaryDetail} />
          <Route path="/summary/TagsSummary" component={TagsSummary} />
          <Route path="/summary/TagsSummaryDetail" component={TagsSummaryDetail} />
          <Route path="/summary/JournalSummary" component={JournalSummary} />
          <Route path="/summary/JournalSummaryDetail" component={JournalSummaryDetail} />
          <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
  );
}

export default App;
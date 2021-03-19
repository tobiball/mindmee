import './App.css';

import { 
  Route, 
  Switch,
} from "react-router-dom";

import MainPage from "./MainPage"

import MainEntry from "./entry/MainEntry"

import MainSummary from "./summary/MainSummary"
import MoodSummaryDetail from "./summary/MoodSummaryDetail"
import TagsSummaryDetail from "./summary/TagsSummaryDetail"
import JournalSummaryDetail from "./summary/JournalSummaryDetail"
import Navigation from './Navigation';




function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route path="/entry" component={MainEntry} />
          <Route path="/summary/MainSummary" component={MainSummary} />
          <Route path="/summary/MoodSummaryDetail" component={MoodSummaryDetail} />
          <Route path="/summary/TagsSummaryDetail" component={TagsSummaryDetail} />
          <Route path="/summary/JournalSummaryDetail" component={JournalSummaryDetail} />
          <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
  );
}

export default App;
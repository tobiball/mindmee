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
import MainSummary from "./summary/MainSummary"


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/entry/MainEntry" component={MainEntry} />
      <Route exact path="/summary/MainSummary" component={MainSummary} />
      </Switch>
    </Router>
  );
}

export default App;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Main from "./routes/Main";
import Submit from "./routes/Submit";
import Volunteer from "./routes/Volunteer";
import Upload from "./routes/Fileupload";


function App() {
  return <Router >
    <Switch>
      <Route path="/submit">
        <Submit />
      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
      <Route path="/volunteer">
        <Volunteer />
      </Route>
      <Route path="/" >
        <Main />
      </Route>
    </Switch>
  </Router>;
}

export default App;
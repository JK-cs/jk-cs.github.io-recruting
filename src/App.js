import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Main from "./routes/Main";
function App()
{
  return <Router>
          <Switch>
          <Route path="/">
              <Main />
          </Route>
          </Switch>
  </Router>;
}

export default App;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Main from "./routes/Main";
import Submit from "./routes/Submit";
import Apply from "./routes/Apply";
import Upload from "./routes/Fileupload";
import UpperBar from "./UpperBar";
import Result from "./routes/Result";


function App() {
  return (
    <div>
      <UpperBar />
      <div>
        <Route path="/" component={Main} exact={true} />
        <Route path="/apply" component={Apply} />
        <Route path="/result" component={Result} />
        <Route path="/submit" component={Submit} />
        <Route path="/upload" component={Upload} />
      </div>
    </div>
  );
}

export default App;
import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import Letter from "./Components/Common/Letter"
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import LoginComponent from "./Components/User/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginComponent} />
          <Route path="/main" exact={true} component={LoginComponent} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/letter" render={()=><Letter/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

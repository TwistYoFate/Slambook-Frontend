import { Route, Switch } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/:arg">
          <Home />
        </Route>
        <Route exact path="/ha/1">
          <div>There</div>
        </Route>
        <Route exact path="/ha/2">
          <div>Deepanshu</div>
        </Route>
      </Switch>
    </div>
  );
}

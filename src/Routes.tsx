import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Router>
  );
}

export default Routes;

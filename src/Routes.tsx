import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { GlobalStyles } from "./global";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GlobalStyles />
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

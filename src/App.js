import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./constants/routes";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path={routes.FAVORITES} component={Favorites} />
          <Route path={routes.HOME} component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;

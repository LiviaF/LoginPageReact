import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const Routes = () => (
    <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/users">
            <div>Usuários</div>
        </Route>
        <Route path="/">
            <Login />
        </Route>
    </Switch>
);

export default Routes;
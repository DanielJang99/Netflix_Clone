import React from "react";
// import "./App.scss";
import Home from "./pages/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Nav from "./navbar/Nav";

const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/Netflix_Clone/home" exact component={Home} />
                <Route path="/Netflix_Clone/search" exact component={Search} />
                <Redirect from="/" to="/Netflix_Clone/home" />
            </Switch>
        </div>
    );
};

export default App;

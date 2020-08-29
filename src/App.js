import React from "react";
// import "./App.scss";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Search from "./pages/Search";

const App = () => {
    return (
        <div>
            <Route path="/Netflix_Clone" exact component={Home} />
            <Route path="/Netflix_Clone/search" component={Search} />
        </div>
    );
};

export default App;

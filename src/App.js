import React from "react";
// import "./App.scss";
import Home from "./Home";
import { Route } from "react-router-dom";
import Search from "./Search";

const App = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
        </div>
    );
};

export default App;

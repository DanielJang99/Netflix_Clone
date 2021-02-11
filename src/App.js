import React from "react";
import Home from "./pages/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";
// import ErrorPage from "./pages/ErrorPage";
import Nav from "./navbar/Nav";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/Netflix_Clone/home" exact component={Home} />
                <Route path="/Netflix_Clone/search" exact component={Search} />
                <Route path="/Netflix_Clone/movies" exact component={Movie} />
                <Route path="/Netflix_Clone/tvshows" exact component={TvShow} />
                <Redirect from="/" to="/Netflix_Clone/home" />

                {/* <Route component={ErrorPage} /> */}
            </Switch>
        </div>
    );
};

export default App;

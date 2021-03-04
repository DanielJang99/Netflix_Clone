import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./navbar/Nav";
import Search from "./pages/Search";
const Home = lazy(() => import("./pages/Home"));
// const Search = lazy(() => import("./pages/Search"));
const Movie = lazy(() => import("./pages/Movie"));
const TvShow = lazy(() => import("./pages/TvShow"));

const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Suspense
                    fallback={
                        <div style={{ height: "1500px", color: "black" }}></div>
                    }
                >
                    <Route path="/Netflix_Clone/home" exact component={Home} />
                    <Route
                        path="/Netflix_Clone/search"
                        exact
                        component={Search}
                    />
                    <Route
                        path="/Netflix_Clone/movies"
                        exact
                        component={Movie}
                    />
                    <Route
                        path="/Netflix_Clone/tvshows"
                        exact
                        component={TvShow}
                    />
                    <Redirect from="/" to="/Netflix_Clone/home" />
                </Suspense>
            </Switch>
        </div>
    );
};

export default App;

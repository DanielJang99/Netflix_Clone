import React from "react";
import "./App.scss";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row
                title="Netflix Originals"
                url={requests.fetchNetflixOriginals}
                isLarge
            />
            <Row title="Trending Now" url={requests.fetchTrending} />
            <Row title="Top Rated" url={requests.fetchTopRated} />
            <Row title="Comedy" url={requests.fetchComedy} />
            <Row title="Adventure" url={requests.fetchAdventure} />
            <Row title="Documentary" url={requests.fetchDocumentary} />
        </div>
    );
}

export default App;

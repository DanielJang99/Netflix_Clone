import React from "react";
import RowContainer from "../containers/RowContainer";
import requests from "../requests";
import BannerContainer from "../containers/BannerContainer";
import "../styles/App.scss";

function Home() {
    return (
        <div className="app">
            <BannerContainer />
            <RowContainer
                title="Trending Now"
                url={requests.fetchTrending}
                type="TRENDING"
                isLarge
            />
            <RowContainer
                title="Netflix Originals"
                url={requests.fetchNetflixOriginals}
                type="NORIGINALS"
            />
            <RowContainer
                title="Top Rated"
                url={requests.fetchTopRated}
                type="TOPRATED"
            />
            <RowContainer
                title="Comedy"
                url={requests.fetchComedy}
                type="COMEDY"
            />
            <RowContainer
                title="Adventure"
                url={requests.fetchAdventure}
                type="ADVENTURE"
            />
            <div style={{ height: "6.25rem" }}></div>
        </div>
    );
}

export default Home;

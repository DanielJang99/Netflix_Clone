import React from "react";
import RowContainer from "../containers/RowContainer";
import requests from "../requests";
import Nav from "../navbar/Nav";
import BannerContainer from "../containers/BannerContainer";
import "../styles/App.scss";

function Home() {
    return (
        <div className="app">
            <Nav showIcon={true} />
            <BannerContainer />
            <RowContainer
                title="Netflix Originals"
                url={requests.fetchNetflixOriginals}
                isLarge
                type="NORIGINALS"
            />
            <RowContainer
                title="Trending Now"
                url={requests.fetchTrending}
                type="TRENDING"
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
        </div>
    );
}

export default Home;

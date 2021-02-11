import React, { useEffect } from "react";
import RowContainer from "../containers/RowContainer";
import requests from "../requests";
import BannerContainer from "../containers/BannerContainer";
import "../styles/App.scss";
import { useDispatch } from "react-redux";
import { setHome } from "../modules/search_action";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHome());
    });
    return (
        <div className="app">
            <BannerContainer type="TRENDING" url={requests.fetchTrending} />
            <RowContainer
                title="Trending Today"
                url={requests.fetchTrending}
                type="TRENDING"
                isLarge
            />
            <RowContainer
                title="Netflix Originals Films"
                url={requests.fetchNetflixOriginalsMovie}
                type="NORIGINALS_MOVIE"
            />
            <RowContainer
                title="Netflix Originals TV Series"
                url={requests.fetchNetflixOriginalsTV}
                type="NORIGINALS_TV"
            />
            <RowContainer
                title="Top Rated"
                url={requests.fetchTopRated}
                type="TOPRATED"
            />
            {/* <RowContainer
                title="Comedy"
                url={requests.fetchComedy}
                type="COMEDY"
            />
            <RowContainer
                title="Adventure"
                url={requests.fetchAdventure}
                type="ADVENTURE"
            /> */}
            <div style={{ height: "6.25rem" }}></div>
        </div>
    );
}

export default Home;

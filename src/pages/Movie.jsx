import React, { useEffect } from "react";
import "../styles/App.scss";
import RowContainer from "../containers/RowContainer";
import requests from "../requests";
import BannerContainer from "../containers/BannerContainer";
import { useDispatch } from "react-redux";
import { setMovie } from "../modules/search_action";
function Movie() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovie());
    });
    return (
        <div className="app">
            <BannerContainer
                type="NORIGINALS_MOVIE"
                url={requests.fetchNetflixOriginalsMovie}
            />
            <RowContainer
                title="Trending This Week"
                url={requests.fetchTrendingMovie}
                type="TRENDING_MOVIE"
                isLarge
            />
            <RowContainer
                title="Netflix Originals Films"
                url={requests.fetchNetflixOriginalsMovie}
                type="NORIGINALS_MOVIE"
            />
            <RowContainer
                title="Romance Films"
                url={requests.fetchRomanceMovie}
                type="ROMANCE_MOVIE"
            />
            <RowContainer
                title="Comedy Films"
                url={requests.fetchComedyMovie}
                type="COMEDY_MOVIE"
            />
            <RowContainer
                title="Adventure Films"
                url={requests.fetchAdventureMovie}
                type="ADVENTURE_MOVIE"
            />
            <RowContainer
                title="Action Films"
                url={requests.fetchActionMovie}
                type="ACTION_MOVIE"
                isLarge
            />
            <RowContainer
                title="Documentary Films"
                url={requests.fetchDocumentaryMovie}
                type="DOCUMENTARY_MOVIE"
            />
            <RowContainer
                title="Animation Films"
                url={requests.fetchAnimationMovie}
                type="ANIMATION_MOVIE"
            />
            <RowContainer
                title="Thriller Films"
                url={requests.fetchThrillerMovie}
                type="THRILLER_MOVIE"
            />
            <RowContainer
                title="Science Fiction Films"
                url={requests.fetchScifiMovie}
                type="SCIFI_MOVIE"
            />
        </div>
    );
}

export default Movie;

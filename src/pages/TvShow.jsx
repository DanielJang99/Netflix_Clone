import React, { useEffect } from "react";
import "../styles/App.scss";
import RowContainer from "../containers/RowContainer";
import requests from "../requests";
import BannerContainer from "../containers/BannerContainer";
import { useDispatch } from "react-redux";
import { setTVShow } from "../modules/search_action";

function TvShow() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTVShow());
    });
    return (
        <div className="app">
            <BannerContainer
                type="TRENDING_TV"
                url={requests.fetchTrendingTV}
            />
            <RowContainer
                title="Trending This Week"
                url={requests.fetchTrendingTV}
                type="TRENDING_TV"
                isLarge
            />
            <RowContainer
                title="Netflix Originals TV Series"
                url={requests.fetchNetflixOriginalsTV}
                type="NORIGINALS_TV"
            />
            <RowContainer
                title="Comedy TV Series"
                url={requests.fetchComedyTV}
                type="COMEDY_TV"
            />
            <RowContainer
                title="Romance TV Series"
                url={requests.fetchRomanceTV}
                type="ROMANCE_TV"
            />
            <RowContainer
                title="Action TV Series"
                url={requests.fetchActionTV}
                type="ACTION_TV"
                isLarge
            />
            <RowContainer
                title="Documentary TV Series"
                url={requests.fetchDocumentaryTV}
                type="DOCUMENTARY_TV"
            />
            <RowContainer
                title="Animation TV Series"
                url={requests.fetchAnimationTV}
                type="ANIMATION_TV"
            />
            <RowContainer
                title="Thriller TV Series"
                url={requests.fetchThrillerTV}
                type="THRILLER_TV"
            />
        </div>
    );
}

export default TvShow;

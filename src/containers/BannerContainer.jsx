import React, { useEffect } from "react";
import requests from "../requests";
import { LoadMovies } from "../modules/movies_action";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../presentational/Banner";

function BannerContainer() {
    const { data, loading, error } = useSelector(
        state => state.movieReducer.TRENDING
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(LoadMovies(requests.fetchTrending, "TRENDING"));
    }, [dispatch, data]);
    if (!data) {
        return null;
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error);
    }
    return <Banner data={data} />;
}

export default BannerContainer;

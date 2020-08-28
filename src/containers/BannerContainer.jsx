import React, { useEffect } from "react";
import requests from "../requests";
import { LoadMovies } from "../movies_action";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../presentational/Banner";

function BannerContainer() {
    const { data, loading, error } = useSelector(state => state.TRENDING);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadMovies(requests.fetchTrending, "TRENDING"));
    }, [dispatch]);
    if (!data) {
        return null;
    }
    if (loading) {
        console.log("loading");
    }

    if (error) {
        console.log(error);
    }
    return <Banner data={data} />;
}

export default BannerContainer;

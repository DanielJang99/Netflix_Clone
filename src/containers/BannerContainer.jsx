import React, { useEffect } from "react";
import { LoadMovies } from "../modules/movies_action";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../presentational/Banner";

function BannerContainer({ type, url }) {
    const { data, loading, error } = useSelector(
        (state) => state.movieReducer[type]
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(LoadMovies(url, type));
    }, [dispatch, data, url, type]);
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

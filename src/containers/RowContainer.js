import React, { useEffect } from "react";
import { LoadMovies } from "../modules/movies_action";
import { useSelector, useDispatch } from "react-redux";
import Row from "../presentational/Row";

function RowContainer({ url, title, isLarge, type }) {
    const { data, loading, error } = useSelector(
        state => state.movieReducer[type]
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(LoadMovies(url, type));
    }, [dispatch, url, type, data]);
    if (!data) {
        return null;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.log(error);
    }

    return <Row data={data} isLarge={isLarge} title={title} />;
}

export default RowContainer;

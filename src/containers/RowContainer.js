import React, { useEffect } from "react";
import { LoadMovies } from "../movies_action";
import { useSelector, useDispatch } from "react-redux";
import Row from "../presentational/Row";

function RowContainer({ url, title, isLarge, type }) {
    const { data, loading, error } = useSelector(state => state[type]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadMovies(url, type));
    }, [dispatch, url, type]);
    if (!data) {
        return null;
    }
    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log(error);
    }

    return <Row data={data} isLarge={isLarge} title={title} />;
}

export default RowContainer;

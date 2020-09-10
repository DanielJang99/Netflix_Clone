import React, { useState, useEffect } from "react";
import axios from "../axios";
import SearchRow from "../presentational/SearchRow";

function SearchRowContainer({ url }) {
    const [movies, setMovies] = useState([]);
    const [rowNum, setRowNum] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.results);

            // check number of movies received to calculate number of rows - each row should display 5 movies
            request.data.total_results >= 20
                ? setRowNum(4)
                : setRowNum(Math.floor(request.data.total_results / 5) + 1);
            return request;
        }
        fetchData();
    }, [url]);

    if (rowNum === 4) {
        return (
            <div style={{ backgroundColor: "#111" }}>
                <SearchRow movies={movies} rowNum={rowNum} url />;
            </div>
        );
    } else {
        // specify div height only when numRows are less than 4 - shows white space if this is not implemented
        return (
            <div style={{ backgroundColor: "#111", height: "100vh" }}>
                <SearchRow movies={movies} rowNum={rowNum} url />;
            </div>
        );
    }
}

export default SearchRowContainer;

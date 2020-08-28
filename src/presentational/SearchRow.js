import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../styles/SearchRow.scss";

const imageURL = "https://image.tmdb.org/t/p/original";

function SearchRow({ url }) {
    const [movies, setMovies] = useState([]);
    const [rowNum, setRowNum] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            request.data.total_results >= 20
                ? setRowNum(5)
                : setRowNum(Math.floor(request.data.total_results / 4) + 1);
            return request;
        }
        fetchData();
    }, [url]);

    while (
        url !== "/search/movie?api_key=47223dc77b02e3169fa9047461b75c36&query="
    ) {
        return (
            <div
                className="grid"
                style={{
                    gridTemplateRows: `repeat(${rowNum}, 12.5rem)`
                }}
            >
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        src={`${imageURL}${movie.backdrop_path}`}
                        alt={movie.title}
                        className="poster"
                    />
                ))}
            </div>
        );
    }
    return null;
}

export default SearchRow;

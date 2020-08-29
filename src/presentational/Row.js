import React, { useState, useEffect } from "react";
import "../styles/Row.scss";
import CallYoutube from "../CallYoutube";

const imageURL = "https://image.tmdb.org/t/p/original";

function Row({ data, isLarge, title }) {
    const [movies, setMovies] = useState([]);
    const [movieState, setMovieState] = useState("");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setMovies(data.data.results);
    }, [data]);

    const click = movieTitle => {
        setMovieState(movieTitle);
        setClicked(!clicked);
    };

    return (
        <div className="row">
            <h2 className="row titles">{title}</h2>
            <div className="row posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => click(movie.title || movie.name)}
                        className={`row poster ${isLarge && "row largePoster"}`}
                        src={
                            isLarge
                                ? `${imageURL}${movie.poster_path}`
                                : `${imageURL}${movie.backdrop_path}`
                        }
                        alt={movie.title}
                    />
                ))}
            </div>
            {movieState && clicked && <CallYoutube movieName={movieState} />}
        </div>
    );
}

export default Row;

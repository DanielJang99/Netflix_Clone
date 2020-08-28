import React, { useState, useEffect } from "react";
import "../styles/Row.scss";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { LoadMovies } from "../movies_action";

const imageURL = "https://image.tmdb.org/t/p/original";

function Row({ data, isLarge, title }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        setMovies(data.data.results);
    }, [data]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };

    const click = movie => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch(error => {
                    alert(
                        "Trailer for the movie is currently unavailable. Try clicking another movie"
                    );
                });
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => click(movie)}
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
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;

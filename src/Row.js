import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.scss";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageURL = "https://image.tmdb.org/t/p/original";

function Row({ title, url, isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [url]);
    // console.log(movies);

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

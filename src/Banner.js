import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.scss";
// import { url } from "inspector";

function Banner() {
    const imageURL = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[0]);
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${imageURL}${movie.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner content">
                <h1 className="banner title">{movie.title || movie.name}</h1>
                <div className="banner buttons">
                    <button className="banner button">Play</button>
                    <button className="banner button">List</button>
                </div>
                <h1 className="banner description">{movie.overview}</h1>
            </div>
            <div className="banner fadeBottom" />
        </header>
    );
}

export default Banner;

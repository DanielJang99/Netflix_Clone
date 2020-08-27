import React, { useState, useEffect } from "react";
import "./Banner.scss";

function Banner({ data }) {
    const imageURL = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        setMovie(data.data.results[0]);
    }, [data]);

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

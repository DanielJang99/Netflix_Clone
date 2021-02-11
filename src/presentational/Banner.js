import React, { useState, useEffect } from "react";
import "../styles/Banner.scss";
import CallYoutube from "../CallYoutube";

function Banner({ data }) {
    const imageURL = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState([]);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setMovie(data.data.results[0]);
    }, [data]);

    const click = () => {
        setClicked(!clicked);
        console.log("clicked");
    };

    return (
        <>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${imageURL}${movie.backdrop_path})`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="banner content">
                    <h1 className="banner title">
                        {movie.title || movie.name}
                    </h1>
                    <div className="banner buttons">
                        <button className="banner button" onClick={click}>
                            Play
                        </button>
                        <button className="banner button">List</button>
                    </div>
                    <h1 className="banner description">{movie.overview}</h1>
                </div>
                <div className="banner fadeBottom" />
            </header>
            {clicked && <CallYoutube movieName={movie.title || movie.name} />}
        </>
    );
}

export default Banner;

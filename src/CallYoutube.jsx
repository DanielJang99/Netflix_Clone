import React, { useState } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function CallYoutube({ movieName }) {
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };

    if (trailerUrl) {
        return <Youtube videoId={trailerUrl} opts={opts} />;
    } else {
        movieTrailer(movieName)
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => {
                alert(
                    "Trailer for this movie is currently unavailable in movie-trailer api. Try clicking another movie"
                );
            });
    }

    return null;
}

export default CallYoutube;

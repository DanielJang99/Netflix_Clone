import React, { useState, useEffect } from "react";
import "../styles/Row.scss";
import CallYoutube from "../CallYoutube";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);
const imageURL = "https://image.tmdb.org/t/p/original";

function Row({ data, isLarge, title }) {
    // store movie data to be displayed in row
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies(data.data.results);
    }, [data]);

    // track click and get the name of the movie clicked
    const [clickedMovieTitle, setClickedMovieTitle] = useState("");
    const [clicked, setClicked] = useState(false);

    const click = movieTitle => {
        setClickedMovieTitle(movieTitle);
        setClicked(!clicked);
    };

    return (
        <div className="row">
            <h2 className="row titles">{title}</h2>

            {/* Calling SwiperJS */}
            <Swiper
                slidesPerView={6}
                spaceBetween={5}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                className="row swiper"
                slidesPerGroup={5}
                speed={650}
                slidesOffsetBefore={50}
            >
                {movies.map(movie => (
                    <SwiperSlide>
                        {/* call different poster size depending on isLarge value */}
                        <img
                            key={movie.id}
                            onClick={() => click(movie.title || movie.name)}
                            className={`row poster`}
                            src={
                                isLarge
                                    ? `${imageURL}${movie.poster_path}`
                                    : `${imageURL}${movie.backdrop_path}`
                            }
                            alt={movie.title}
                        />
                    </SwiperSlide>
                ))}

                {/* Navigation buttons */}
                <div
                    className="swiper-button-next"
                    style={{ color: "white" }}
                />
                <div
                    className="swiper-button-prev"
                    style={{ color: "white" }}
                />
            </Swiper>

            {/* call youtube trailer for the movie displayed in row after it gets clicked*/}
            {clickedMovieTitle && clicked && (
                <CallYoutube movieName={clickedMovieTitle} />
            )}
        </div>
    );
}

export default Row;

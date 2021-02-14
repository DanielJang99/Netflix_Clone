import React, { useState } from "react";
import "../styles/SearchRow.scss";
import CallYoutube from "../CallYoutube";

const imageURL = "https://image.tmdb.org/t/p/original";

function SearchRow({ movies, rowNum, url }) {
    const [movieState, setMovieState] = useState("");
    const [clicked, setClicked] = useState(false);
    const [clickedMovieID, setClickedMovieID] = useState(0);

    const click = (movieTitle, number) => {
        setClickedMovieID(Math.floor(number / 5)); //divide movie ID by 5 to find its trailer row
        setMovieState(movieTitle);
        setClicked(!clicked);
    };

    const clickpage = (e) => {
        console.log(e.target.textContent);
    };

    return (
        <>
            <div className="grid">
                {movies.map((movie, i) => (
                    <>
                        <div>
                            <img
                                onClick={() =>
                                    click(movie.title || movie.name, i)
                                }
                                key={i}
                                src={`${imageURL}${movie.backdrop_path}`}
                                alt={movie.title}
                                className="poster"
                            />
                        </div>

                        {/* for every row of searched movie posters, create another row for trailers (trailer row) to be displayed once clicked */}
                        {(i + 1) % 5 === 0 && (
                            <>
                                {/* first cell of trailer row - check the ID of the clicked movie to locate its trailer row */}
                                {Math.floor(i / 5) === clickedMovieID ? (
                                    <div
                                        style={{
                                            width: "525%",
                                        }}
                                    >
                                        {/* Call movie trailer once its poster is clicked and has valid movie title */}
                                        {movieState && clicked && (
                                            <CallYoutube
                                                movieName={movieState}
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <div />
                                )}

                                {/*  empty divs as placeholders*/}
                                <div />
                                <div />
                                <div />
                                <div />
                            </>
                        )}
                    </>
                ))}
            </div>
            <span>
                <b className="pageCol" onClick={clickpage}>
                    1
                </b>
                <b className="pageCol" onClick={clickpage}>
                    2
                </b>
                <b className="pageCol" onClick={clickpage}>
                    3
                </b>
            </span>
        </>
    );
}

export default SearchRow;

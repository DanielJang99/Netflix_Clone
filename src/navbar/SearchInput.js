import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchUserInput } from "../modules/search_action";
import { btnClicked } from "../modules/search_action";

const SearchInput = React.memo(({ clicked }) => {
    const queryString = useSelector((state) => state.searchReducer.query);
    const dispatch = useDispatch();
    const queryRef = useRef();
    let history = useHistory();
    const current_page = useSelector(
        (state) => state.searchReducer.current_page
    );

    if (queryString && clicked) {
        // if user has typed input
        history.push(`/Netflix_Clone/search?query=${queryString}`);
    }

    const handleChange = (e) => {
        // send input to store
        dispatch(searchUserInput(e.target.value));
    };

    useEffect(() => {
        queryRef.current.focus();
    });
    const handleEscape = (event) => {
        if (event.keyCode === 27) {
            const page = current_page.home
                ? "/Netflix_Clone/home"
                : current_page.movie
                ? "/Netflix_Clone/movies"
                : "/Netflix_Clone/tvshows";
            history.push(page);
            dispatch(btnClicked());
        }
    };

    return (
        <input
            type="text"
            ref={queryRef}
            onChange={handleChange}
            placeholder={"Titles, people, genres"}
            className={`SearchInput ${clicked && "clicked"}`}
            onKeyDown={handleEscape}
        />
    );
});

export default SearchInput;

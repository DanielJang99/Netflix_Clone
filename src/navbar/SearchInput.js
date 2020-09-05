import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchUserInput } from "../modules/search_action";

const SearchInput = React.memo(({ clicked }) => {
    const queryString = useSelector(state => state.searchReducer.query);
    const dispatch = useDispatch();
    const queryRef = useRef();
    let history = useHistory();

    if (queryString) {
        history.push(`/Netflix_Clone/search?query=${queryString}`);
    }

    if (!clicked) {
        history.push("/Netflix_Clone");
    }

    const handleChange = e => {
        dispatch(searchUserInput(e.target.value));
    };

    useEffect(() => {
        queryRef.current.focus();
    });
    const handleEscape = event => {
        if (event.keyCode === 27) {
            history.push("/Netflix_Clone");
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

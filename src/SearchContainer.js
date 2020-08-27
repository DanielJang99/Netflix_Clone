import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SearchContainer() {
    const [query, setQuery] = useState("");
    const queryRef = useRef();

    let history = useHistory();

    const getInput = () => {
        setQuery(queryRef.current.value);
    };

    const handleEscape = event => {
        if (event.keyCode === 27) {
            history.push("/");
        }
    };

    useEffect(() => {
        history.push(`/search?query=${query}`);
    }, [history, query]);

    return (
        <>
            <input
                autoFocus
                type="text"
                ref={queryRef}
                onChange={getInput}
                placeholder={"Press esc to exit"}
                onKeyDown={handleEscape}
            />
        </>
    );
}

export default SearchContainer;

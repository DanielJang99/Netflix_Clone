import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SearchInput() {
    const [query, setQuery] = useState("");
    const queryRef = useRef();

    let history = useHistory();

    const getInput = () => {
        setQuery(queryRef.current.value);
    };

    const handleEscape = event => {
        if (event.keyCode === 27) {
            history.push("/Netflix_Clone");
        }
    };

    useEffect(() => {
        history.push(`/Netflix_Clone/search?query=${query}`);
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

export default SearchInput;

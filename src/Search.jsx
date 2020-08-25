import React from "react";
import Nav from "./Nav";
import qs from "qs";
import SearchRow from "./SearchRow";

function Search({ location }) {
    const SearchQuery = qs.parse(location.search, {
        ignoreQueryPrefix: true
    }).query;

    const searchRequest = `/search/movie?api_key=47223dc77b02e3169fa9047461b75c36&query=${SearchQuery}`;

    return (
        <div
            className="app"
            style={{ backgroundColor: "#111", height: "1100px" }}
        >
            <Nav showIcon={false} />
            <SearchRow url={searchRequest} />
        </div>
    );
}

export default Search;

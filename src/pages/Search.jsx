import React from "react";
import qs from "qs";
import SearchRow from "../presentational/SearchRow";

function Search({ location }) {
    const SearchQuery = qs.parse(location.search, {
        ignoreQueryPrefix: true
    }).query;

    const searchRequest = `/search/multi?api_key=47223dc77b02e3169fa9047461b75c36&query=${SearchQuery}`;

    return (
        <div
            className="app"
            style={{ backgroundColor: "#111", height: "68.75rem" }}
        >
            <SearchRow url={searchRequest} />
        </div>
    );
}

export default Search;

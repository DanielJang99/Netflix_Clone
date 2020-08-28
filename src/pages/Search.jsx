import React from "react";
import Nav from "../navbar/Nav";
import qs from "qs";
import SearchRow from "../presentational/SearchRow";

function Search({ location }) {
    const SearchQuery = qs.parse(location.search, {
        ignoreQueryPrefix: true
    }).query;

    console.log("loaded search");

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

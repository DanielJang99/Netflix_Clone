import React from "react";
import qs from "qs";
import SearchRowContainer from "../containers/SearchRowContainer";

function Search({ location }) {
    const SearchQuery = qs.parse(location.search, {
        ignoreQueryPrefix: true
    }).query;

    const searchRequest = `/search/multi?api_key=47223dc77b02e3169fa9047461b75c36&query=${SearchQuery}`;

    return <SearchRowContainer url={searchRequest} />;
}

export default Search;

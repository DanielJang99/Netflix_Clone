const API_KEY = "47223dc77b02e3169fa9047461b75c36";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
};

export default requests;

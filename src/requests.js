const API_KEY = "47223dc77b02e3169fa9047461b75c36";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&include_adult=false`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&include_adult=false`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&include_adult=false`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12&include_adult=false`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99&include_adult=false`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&include_adult=false`,
    fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=parasite`
};

export default requests;

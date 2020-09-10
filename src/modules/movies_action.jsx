import axios from "../axios";

// store for each row of movie genres displayed at homepage
const GET_TRENDING = "GET_TRENDING";
const GET_TRENDING_SUCCESS = "GET_TRENDING_SUCCESS";
const GET_TRENDING_FAIL = "GET_TRENDING_FAIL";

const GET_TOPRATED = "GET_TOPRATED";
const GET_TOPRATED_SUCCESS = "GET_TOPRATED_SUCCESS";
const GET_TOPRATED_FAIL = "GET_TOPRATED_FAIL";

const GET_COMEDY = "GET_COMEDY";
const GET_COMEDY_SUCCESS = "GET_COMEDY_SUCCESS";
const GET_COMEDY_FAIL = "GET_COMEDY_FAIL";

const GET_ADVENTURE = "GET_ADVENTURE";
const GET_ADVENTURE_SUCCESS = "GET_ADVENTURE_SUCCESS";
const GET_ADVENTURE_FAIL = "GET_ADVENTURE_FAIL";

const GET_NORIGINALS = "GET_NORIGINALS";
const GET_NORIGINALS_SUCCESS = "GET_NORIGINALS_SUCCESS";
const GET_NORIGINALS_FAIL = "GET_NORIGINALS_FAIL";

const fetchMovies = async RequestType => {
    const movies = await axios.get(RequestType);
    return movies;
};

export const LoadMovies = (RequestURL, type) => async dispatch => {
    dispatch({ type: `GET_${type}` });
    try {
        const movies = await fetchMovies(RequestURL);
        dispatch({ type: `GET_${type}_SUCCESS`, movies });
    } catch (e) {
        dispatch({ type: `GET_${type}_FAIL`, e });
    }
};

const initialState = {
    TRENDING: {
        data: null,
        loading: false,
        error: null
    },
    TOPRATED: {
        data: null,
        loading: false,
        error: null
    },
    COMEDY: {
        data: null,
        loading: false,
        error: null
    },
    ADVENTURE: {
        data: null,
        loading: false,
        error: null
    },
    NORIGINALS: {
        data: null,
        loading: false,
        error: null
    }
};

export const handleAsync = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state,
                        loading: true
                    }
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state,
                        data: action.movies
                    }
                };
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state,
                        error: action.error
                    }
                };
            default:
                return state;
        }
    };
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TRENDING:
        case GET_TRENDING_SUCCESS:
        case GET_TRENDING_FAIL:
            return handleAsync(GET_TRENDING, "TRENDING")(state, action);
        case GET_TOPRATED:
        case GET_TOPRATED_SUCCESS:
        case GET_TOPRATED_FAIL:
            return handleAsync(GET_TOPRATED, "TOPRATED")(state, action);
        case GET_COMEDY:
        case GET_COMEDY_SUCCESS:
        case GET_COMEDY_FAIL:
            return handleAsync(GET_COMEDY, "COMEDY")(state, action);
        case GET_ADVENTURE:
        case GET_ADVENTURE_SUCCESS:
        case GET_ADVENTURE_FAIL:
            return handleAsync(GET_ADVENTURE, "ADVENTURE")(state, action);
        case GET_NORIGINALS:
        case GET_NORIGINALS_SUCCESS:
        case GET_NORIGINALS_FAIL:
            return handleAsync(GET_NORIGINALS, "NORIGINALS")(state, action);
        default:
            return state;
    }
}

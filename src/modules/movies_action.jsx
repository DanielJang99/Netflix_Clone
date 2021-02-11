import axios from "../axios";
import { genre_list } from "../requests";

const fetchMovies = async (RequestType) => {
    const movies = await axios.get(RequestType);
    return movies;
};

export const LoadMovies = (RequestURL, type) => async (dispatch) => {
    dispatch({ type: `GET_${type}` });
    try {
        const movies = await fetchMovies(RequestURL);
        dispatch({ type: `GET_${type}_SUCCESS`, movies });
    } catch (e) {
        dispatch({ type: `GET_${type}_FAIL`, e });
    }
};

export const handleAsync = (type, key) => {
    const [SUCCESS, FAIL] = [`${type}_SUCCESS`, `${type}_FAIL`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state,
                        loading: true,
                    },
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state,
                        data: action.movies,
                    },
                };
            case FAIL:
                return {
                    ...state,
                    [key]: {
                        ...state,
                        error: action.error,
                    },
                };
            default:
                return state;
        }
    };
};

const initial_data_state = {
    data: null,
    loading: false,
    error: null,
};

const initialState = {};
const handlers = {};
genre_list.forEach((genre) => {
    initialState[genre] = initial_data_state;
    const [GET_GENRE, SUCCESS, FAIL] = [
        `GET_${genre}`,
        `GET_${genre}_SUCCESS`,
        `GET_${genre}_FAIL`,
    ];
    handlers[GET_GENRE] = handleAsync(GET_GENRE, genre);
    handlers[SUCCESS] = handleAsync(GET_GENRE, genre);
    handlers[FAIL] = handleAsync(GET_GENRE, genre);
});

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

export const movieReducer = createReducer(initialState, handlers);

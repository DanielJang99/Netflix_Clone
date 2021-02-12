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

export const handleAsync = (type, key, keepData = false) => {
    const [SUCCESS, FAIL] = [`${type}_SUCCESS`, `${type}_FAIL`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(
                        keepData ? state[key].data : null
                    ),
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.movies),
                };
            case FAIL:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.error),
                };
            default:
                return state;
        }
    };
};

// const initial_data_state = {
//     data: null,
//     loading: false,
//     error: null,
// };

const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: (payload) => ({
        loading: false,
        data: payload,
        error: null,
    }),
    error: (error) => ({
        loading: false,
        data: null,
        error: error,
    }),
};

const initialState = {};
const handlers = {};
genre_list.forEach((genre) => {
    initialState[genre] = reducerUtils.initial();
    const [GET_GENRE, SUCCESS, FAIL] = [
        `GET_${genre}`,
        `GET_${genre}_SUCCESS`,
        `GET_${genre}_FAIL`,
    ];
    handlers[GET_GENRE] = handleAsync(GET_GENRE, genre, true);
    handlers[SUCCESS] = handleAsync(GET_GENRE, genre, true);
    handlers[FAIL] = handleAsync(GET_GENRE, genre, true);
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

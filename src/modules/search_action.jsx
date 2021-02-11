const initialState = {
    query: "",
    clicked: false,
    current_page: {
        home: false,
        movie: false,
        tvshow: false,
    },
};
const SEARCH_USER_INPUT = "SEARCH_USER_INPUT";
const CLICKED = "CLICKED";
const SET_HOME = "SET_HOME";
const SET_MOVIE = "SET_MOVIE";
const SET_TVSHOW = "SET_TVSHOW";

// handle search input from user
export const searchUserInput = (query) => ({
    type: SEARCH_USER_INPUT,
    query,
});

// handle whether searchbar icon is clicked or not
export const btnClicked = () => ({
    type: CLICKED,
});

export const setHome = () => ({
    type: SET_HOME,
});

export const setMovie = () => ({
    type: SET_MOVIE,
});

export const setTVShow = () => ({
    type: SET_TVSHOW,
});
export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_USER_INPUT:
            return {
                ...state,
                query: action.query,
            };
        case CLICKED:
            return {
                ...state,
                clicked: !state.clicked,
            };
        case SET_HOME:
            return {
                ...state,
                current_page: {
                    home: true,
                    movie: false,
                    tvshow: false,
                },
            };
        case SET_MOVIE:
            return {
                ...state,
                current_page: {
                    home: false,
                    movie: true,
                    tvshow: false,
                },
            };
        case SET_TVSHOW:
            return {
                ...state,
                current_page: {
                    home: false,
                    movie: false,
                    tvshow: true,
                },
            };

        default:
            return state;
    }
}

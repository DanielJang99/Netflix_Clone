const initialState = {
    query: "",
    clicked: false
};
const SEARCH_USER_INPUT = "SEARCH_USER_INPUT";
const CLICKED = "CLICKED";
const UNCLICKED = "UNCLICKED";

// handle search input from user
export const searchUserInput = query => ({
    type: SEARCH_USER_INPUT,
    query
});

// handle whether searchbar icon is clicked or not
export const btnClicked = () => ({
    type: CLICKED
});
export const btnUnclicked = () => ({
    type: UNCLICKED
});

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_USER_INPUT:
            return {
                ...state,
                query: action.query
            };
        case CLICKED:
            return {
                ...state,
                clicked: true
            };
        case UNCLICKED:
            return {
                ...state,
                clicked: false
            };
        default:
            return state;
    }
}

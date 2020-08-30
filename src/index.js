import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import movieReducer from "./movies_action";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    movieReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
    <HashRouter basename={"/Netflix_Clone"}>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

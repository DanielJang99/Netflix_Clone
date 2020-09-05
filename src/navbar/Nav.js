import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { btnClicked, btnUnclicked } from "../modules/search_action";

function Nav() {
    const [ScrolledNav, handleScrolledNav] = useState(false);
    const dispatch = useDispatch();
    const clicked = useSelector(state => state.searchReducer.clicked);

    const toggle = () => {
        if (clicked) {
            dispatch(btnUnclicked());
        } else {
            dispatch(btnClicked());
        }
    };

    useEffect(() => {
        const showBanner = () => {
            if (window.scrollY > 100) {
                handleScrolledNav(true);
            } else {
                handleScrolledNav(false);
            }
        };
        window.addEventListener("scroll", () => showBanner());
        return () => {
            window.removeEventListener("scroll", showBanner());
        };
    }, []);

    return (
        <div className={`nav ${(ScrolledNav || clicked) && "black"}`}>
            <div>
                <img
                    className={"logo"}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                    alt="Netflix Logo"
                />
            </div>

            <div className={"SearchDiv"}>
                <SearchInput clicked={clicked} />
                <div onClick={() => toggle()}>
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
}

export default Nav;

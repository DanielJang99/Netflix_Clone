import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { btnClicked, btnUnclicked } from "../modules/search_action";

function Nav() {
    const dispatch = useDispatch();
    const clicked = useSelector((state) => state.searchReducer.clicked);

    const toggle = () => {
        // handle click for search bar icon with redux
        if (clicked) {
            dispatch(btnUnclicked());
        } else {
            dispatch(btnClicked());
        }
    };

    // turn Nav to dark if the page is scrolled over 100
    const [ScrolledNav, handleScrolledNav] = useState(false);
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
        <div className={`nav ${(ScrolledNav || clicked) && "dark"}`}>
            {/* Netflix logo button */}
            <div className={"navDiv"}>
                <img
                    className={"logo"}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                />
                <span style={{ paddingLeft: "7.5rem" }}>
                    <b className={"navMenu"}>Movies</b>
                    <b className={"navMenu"}>TV Shows</b>
                    <b className={"navMenu"}>My List</b>
                </span>
            </div>

            <div className={"SearchDiv"}>
                {/* input tag only visible once search bar icon is clicked */}
                <SearchInput clicked={clicked} />

                {/* search bar icon */}
                <div onClick={() => toggle()}>
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
}

export default Nav;

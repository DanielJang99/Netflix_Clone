import React, { useEffect, useState } from "react";
import "./Nav.scss";
import SearchIcon from "./SearchIcon";
import SearchContainer from "./SearchContainer";

function Nav({ showIcon }) {
    const [show, handleShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        setClicked(true);
    };

    useEffect(() => {
        const showBanner = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        window.addEventListener("scroll", () => showBanner());
        return () => {
            window.removeEventListener("scroll", showBanner());
        };
    }, []);

    return (
        <div className={`nav ${(show || !showIcon) && "black"}`}>
            <div>
                <img
                    className="nav logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                    alt="Netflix Logo"
                />
            </div>

            <div style={{ paddingRight: "50px" }}>
                {clicked || !showIcon ? (
                    <SearchContainer />
                ) : (
                    <div onClick={() => toggle()}>
                        <SearchIcon />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav;

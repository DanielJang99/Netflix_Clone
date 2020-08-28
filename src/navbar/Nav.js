import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";

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

            <div style={{ paddingRight: "3.125rem" }}>
                {clicked || !showIcon ? (
                    <SearchInput />
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

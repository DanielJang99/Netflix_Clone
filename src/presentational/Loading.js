import React from "react";

function Loading() {
    alert("로딩중");
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#111",
                color: "white"
            }}
        >
            Loading..
        </div>
    );
}

export default Loading;

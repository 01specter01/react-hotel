// import React, { useEffect, useState } from "react";

// function Button() {
//     <button onClick={handleEvent}>CheckIn</button>;
// }
// export default Button;

import React from "react";
import { useState, useEffect } from "react";
import { Room } from "./Room";

export default function Button({ roomNr }) {
    const [checkedIn, setCheckedIn] = useState(false);
    useEffect(() => {
        if (checkedIn) {
            alert(`Zimmer NR. ${roomNr} ist nicht verfügbar.`);
            // const pElem = document.createElement("p");
            // const buttonElem = document.getElementsByTagName("button");
            // pElem.append(buttonElem);
        }
    }, [checkedIn]);

    const handleclick = () => {
        setCheckedIn(!checkedIn);
        console.log(checkedIn);
    };

    return (
        <div>
            <button onClick={handleclick}>Check In</button>
        </div>
    );
}

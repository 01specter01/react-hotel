import React from "react";
import { useState, useEffect } from "react";
import { Room } from "./Room";

export default function Button({ roomNr }) {
    const [checkedIn, setCheckedIn] = useState(false);

    useEffect(() => {
        // setCounter(localStorage.getItem("checkedIn") || 0);
        if (checkedIn) {
            alert(`Zimmer NR. ${roomNr} ist nicht mehr verfügbar.`);
        }
    }, [checkedIn]);

    const handleclick = () => {
        setCheckedIn(!checkedIn);
        console.log(checkedIn);
    };

    return (
        <div>
            <button onClick={handleclick}>Check-In / Check-Out</button>
        </div>
    );
}

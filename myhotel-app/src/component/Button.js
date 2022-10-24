import React from "react";
import { useState, useEffect } from "react";
import { Room } from "./Room";

export default function Button({ roomNr }) {
    const [checkedIn, setCheckedIn] = useState(false);
    useEffect(() => {
        if (checkedIn) {
            alert(`Zimmer NR. ${roomNr} ist nicht verfügbar.`);
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

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { room } from "../rooms.json";

export default function Room({ element }) {
    return (
        <div className="room">
            <p>The RoomNumber is: {element.roomNo}</p>
            <p>
                The customer is called {element.guest.firstName}{" "}
                {element.guest.lastName}
            </p>
            <p>
                The checkIn date: {element.checkIn.slice(8)}
                {"-"}
                {element.checkIn.slice(5, 7)}
                {"-"}
                {element.checkIn.slice(0, 4)}
                <br></br>
                <br></br>
                The checkOut date: {element.checkOut.slice(8)}
                {"-"}
                {element.checkOut.slice(5, 7)}
                {"-"}
                {element.checkOut.slice(0, 4)}
            </p>
            <p>Check-In was on the: {element.checkIn}</p>
            <Button roomNr={element.roomNo} />
            <br></br>
        </div>
    );
}

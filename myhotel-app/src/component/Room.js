import React, { useEffect, useState } from "react";

function Room({ element }) {
    // useEffect(() => {
    //     document.title = `${checkedIn}`;
    // if (`${(element.roomNo = false)}`) {
    //     alert(`Zimmer Nr. {element.roomNo} ist nun belegt.`);
    // }
    // });
    const [checkedIn, setCheckedIn] = useState(false);
    const handleEvent = () => {
        setCheckedIn(!checkedIn);
        console.log("event:", checkedIn);
        useEffect(({checkedIn}) => {
            if ({checkedIn} === true) {
                alert(`Zimmer Nr. <roomNo> ist nun belegt.`);
            }
    
    return (
        <div className="room">
            <button onClick={handleEvent}>CheckIn</button>
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
            </p>
            ss it to the Message component.
            <p>
                The checkOut date: {element.checkOut.slice(8)}
                {"-"}
                {element.checkOut.slice(5, 7)}
                {"-"}
                {element.checkOut.slice(0, 4)}
            </p>
            <br></br>
        </div>
    );
}
export default Room
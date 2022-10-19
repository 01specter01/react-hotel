import rooms from "./rooms.json";
// import "./App.css";
console.log(rooms);

function App() {
    return rooms
        .sort((a, b) => a.roomNo - b.roomNo)
        .map((element, i) => {
            return (
                <div key={i}>
                    <p>The RoomNumber is: {element.roomNo}</p>
                    <p>
                        The kustomer is called {element.guest.firstName}{" "}
                        {element.guest.lastName}
                    </p>
                    <p>The checkIn date: {element.checkIn}</p>
                    <p>The checkIn date: {element.checkOut}</p>
                    <br></br>
                </div>
            );
        });
}

export default App;

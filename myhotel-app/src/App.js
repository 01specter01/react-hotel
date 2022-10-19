import rooms from "./rooms.json";
import "./App.css";
console.log(rooms);

function App() {
    return rooms
        .sort((a, b) => a.roomNo - b.roomNo)
        .map((element, i) => {
            return (
                <div key={i} className="App">
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
        });
}

export default App;

import rooms from "./rooms.json";
import "./App.css";
import Room from "./component/Room";
import { createElement } from "react";

// console.log(rooms);

function App() {
    const roomComponents = rooms
        .sort((a, b) => a.roomNo - b.roomNo)
        .map((element, i) => {
            createElement("p");

            return <Room element={element} key={i} />;
        });
    return <div className="App">{roomComponents}</div>;
}

export default App;

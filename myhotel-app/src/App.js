import rooms from "./rooms.json";
import "./App.css";
import Room from "./component/Room";
import { createElement } from "react";

// console.log(rooms);
const newArray = [].map((element) => ({ ...element, a: false }));
function App() {
    const roomComponents = rooms
        .sort((a, b) => a.roomNo - b.roomNo)
        .map((element, i) => {
            return <Room element={element} key={i} />;
        });
    return <div className="App">{roomComponents}</div>;
}

export default App;

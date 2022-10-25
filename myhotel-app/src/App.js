import rooms from "./rooms.json";
import "./App.css";
import Room from "./component/Room";
import { createElement } from "react";
import Form from "./component/Form";

// const newArray = [].map((element) => ({ ...element, a: false }));
function App() {
    const roomComponents = rooms
        .sort((a, b) => a.roomNo - b.roomNo)
        .map((element, i) => {
            return <Room element={element} key={i} />;
        });
    return (
        <div className="App">
            <br></br>
            <Form />
            {roomComponents}
        </div>
    );
}

export default App;
//neue componente formula

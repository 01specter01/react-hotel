import React from "react";

export default class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>firstname: </label>
                    <input type="text" name="name" placeholder="firstname" />
                    <br></br>
                    <br></br>
                    <label>lastname: </label>
                    <input type="text" name="name" placeholder="lstname" />
                    <br></br>
                    <br></br>
                    <label>arivaldate:</label>
                    <input type="date" name="name" placeholder="arivaldate" />
                    <br></br>
                    <br></br>
                    <label>depaturedate</label>
                    <input type="date" name="name" placeholder="depaturedate" />
                    <br></br>
                    <br></br>
                </form>
            </div>
        );
    }
}

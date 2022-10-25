import React from "react";
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            arivaldate: "",
            depaturedate: "",
        };
    }
    handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        console.log(name);
        const value = target.value;
        console.log(value);
        this.setState({ ...this.state, [name]: value });
        const form = document.querySelector("form");
        const inputf = document.querySelector("#F");
        const inputl = document.querySelector("#L");
        const inputAd = document.querySelector("#AD");
        const inputDd = document.querySelector("#DD");
        form.addEventListener("submit", () => {
            evt.preventDefault();
            localStorage.setItem("firstName", inputf.value);
            localStorage.setItem("lastName", inputl.value);
            localStorage.setItem("Anreise", inputAd.value);
            localStorage.setItem("Abreise", inputDd.value);
        });
    }
    render() {
        const { firstname, lastname, arivaldate, depaturedate } = this.state;
        return (
            <div>
                <form>
                    <label>firstname: </label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="firstname"
                        value={firstname}
                        onChange={this.handleChange.bind(this)}
                        id="F"
                    />
                    <br></br>
                    <br></br>
                    <label>lastname: </label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="lastname"
                        value={lastname}
                        onChange={this.handleChange.bind(this)}
                        id="L"
                    />
                    <br></br>
                    <br></br>
                    <label>arivaldate: </label>
                    <input
                        type="date"
                        name="arivaldate"
                        value={arivaldate}
                        onChange={this.handleChange.bind(this)}
                        id="AD"
                    />
                    <br></br>
                    <label>depaturedate: </label>
                    <input
                        type="date"
                        name="depaturedate"
                        placeholder="depaturedate"
                        value={depaturedate}
                        onChange={this.handleChange.bind(this)}
                        id="DD"
                    />
                    <br></br>
                    <br></br>
                    <button type="submit">Senden</button>
                </form>
            </div>
        );
    }
}

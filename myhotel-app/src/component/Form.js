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
    handleChange(e) {
        const target = e.target;
        console.log(target);
        const firstname = target.name;
        console.log(firstname);
        const lastname = target.name;
        console.log(lastname);
        const value = target.value;

        this.setState({ [lastname]: value });
    }
    render() {
        const { firstname, lastname, arivaldate, depaturedate } = this.state;
        return (
            <div>
                <form>
                    <label>firstname: </label>
                    <input
                        type="text"
                        name="One"
                        placeholder="firstname"
                        value={firstname}
                        onChange={this.handleChange.bind(this)}
                    />
                    <br></br>
                    <br></br>
                    <label>lastname: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="lastname"
                        value={lastname}
                        onChange={this.handleChange.bind(this)}
                    />
                    <br></br>
                    <br></br>
                    <label>arivaldate:</label>
                    <input
                        type="date"
                        name="name"
                        placeholder="arivaldate"
                        value={arivaldate}
                        onChange={this.handleChange.bind(this)}
                    />
                    <br></br>
                    <br></br>
                    <label>depaturedate</label>
                    <input
                        type="date"
                        name="name"
                        placeholder="depaturedate"
                        value={depaturedate}
                        onChange={this.handleChange.bind(this)}
                    />
                    <br></br>
                    <br></br>
                </form>
            </div>
        );
    }
}

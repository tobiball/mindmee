import { Link } from "react-router-dom";
import { Component } from 'react';

import './MoodEntry2.css'

export default class MoodEntry2 extends Component {

    state = {
        moodslider2: ''
    };

    handleChange = (event) => {
        const input = event.target;
        const value = parseInt(input.value);

        this.setState({ value });
    };

    handleFormSubmit = () => {
        const { value } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": localStorage.getItem('obj'),
            "activity_valence": {value}['value']

        });
        console.log(raw);
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://192.168.178.23:8000/api/notes/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))};

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>

                <div className="grid">

                    <i className="material-icons item-a" style={{color: "rgb(255, 107, 89)"}}>mood</i>


                    <div className="grid-text">
                        <h2 className="master-headline mood-h2">do you look forward  <br></br>to todays activities?</h2>
                    </div>

                    <div className="range-style">
                        <input
                            type="range"
                            id="mood"
                            name="moodslider4"
                            mind="0"
                            max="1000"
                            className="rangeslider"
                            value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>

                    <i className="material-icons item-b" style={{color: "rgb(255, 209, 83)"}}>sentiment_very_dissatisfied</i>

                    <div>
                        <Link
                            to={{
                                pathname: "/summary/MainSummary",
                            }}
                        >
                            <button
                                type="submit"
                                onClick = {this.handleFormSubmit}
                                className="master-text-text mood-button"
                            >continue</button>
                        </Link>
                    </div>

                </div>

            </form>
        )
    }
}
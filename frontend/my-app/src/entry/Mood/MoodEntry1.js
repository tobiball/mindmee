import { Link } from "react-router-dom";
import { Component } from 'react';
import './MoodEntry2.css'

export default class MoodEntry1 extends Component {
 
  state = {
    moodslider1: ''
  };

   handleChange = (event) => {
    const input = event.target;
    const value = parseInt(input.value);

    const myDate = new Date().toISOString().replace('Z', '');
    this.setState({ value, myDate });
  };

  handleFormSubmit = () => {
    const { value, myDate } = this.state;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "uid": "TobiBall",
      "timestamp": {myDate}['myDate'],
      "valence": {value}['value'],
      "arousal": 0,
      "activity_level": 0,
      "activity_valence": 0,
    });
      console.log(raw);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    var obj;
     fetch("http://192.168.178.23:8000/api/notes/", requestOptions)
      .then(response => response.json())
         .then(data =>  obj = data["id"])
         .then(data => {
          window.localStorage.setItem("obj", obj)})
              .then(result => console.log(obj))
      .catch(error =>('error', error));
     };


    render() {
      return (
          <form onSubmit={this.handleFormSubmit}>

            <div className="grid">

              <i className="material-icons item-a" style={{color: "rgb(255, 107, 89)"}}>mood</i>


              <div className="grid-text">
                <h2 className="master-headline mood-h2">how are you<br></br>feeling?</h2>
              </div>

              <div className="range-style">
                <input
                type="range"
                id="mood"
                name="moodslider1"
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
                          pathname: "/entry/Mood/MoodEntry2",
                          state: {id:window.localStorage.getItem('obj')} //  data array of objects
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
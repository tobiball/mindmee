import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

import './journalentry.css'

export default class JournalEntry extends Component  {
  
  state = {
    headline: '',
    entry: ''
  };

   handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { headline, entry } = this.state;
    localStorage.setItem( 'JournalEntry' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
    render() {
      return (
        <div className="journal-grid">

          <h2 className="master-headline journal-headline">personal journal</h2>
          
          <form onSubmit={this.handleFormSubmit} className="form-grid">
            
            <textarea 
              className="  textarea-headline " 
              type="text" 
              name="headline"
              placeholder="Title"
              value={this.state.user}
              onChange={this.handleChange}
              />

            <textarea 
              className=" master-text-text textarea-entry " 
              type="text" 
              name="entry"
              placeholder="Write a new entry"
              value={this.state.user}
              onChange={this.handleChange}
              />

            <div>
              <Link to="/summary/MainSummary">
                <button
                onClick={this.handleFormSubmit}
                >continue</button>
              </Link>
            </div>

          </form>

        </div>
      )
    }    
  }

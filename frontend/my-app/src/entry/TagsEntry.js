import { Link } from "react-router-dom";
import React from "react";
import { v4 as uuidv4 } from 'uuid'

import saveToLocal from "./saveToLocal"
import './TagsEntry.css'



export default function TagsEntry() {

  const [tags, setTags] = React.useState([]);
  const removeTag =indextoRemove => {
    setTags(tags.filter((_, index) => index !== indextoRemove));
  };
  const addTags = event => {
    if (event.target.value !== "") {
      setTags([... tags, event.target.value])
      event.target.value = "";
    }
  };

  const handleFormSubmit = () => {
    const { myTags } = tags;
    localStorage.setItem( 'myTags' + ' ' + uuidv4(), JSON.stringify(tags))
  };


  return (
    <div className="tag-grid">

      <div className="tags-input">
        <h4 className="tags-entry-headline">whats up your mind?</h4>
        <ul className="ul-grid">
          {tags.map((tag, index) => (
              <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <i 
              className="material-icons tag-close-icon" 
              onClick={() => removeTag(index)}
              >close</i>
            </li>
          ))}
        </ul>
        <input 
          className="master-text-text"
          type="text" 
          placeholder="Enter your Tag here" 
          onKeyUp={e => (e.key === "Enter" ? addTags(e) : null)}
        />
      </div>


      <div>
        <Link to="/entry/JournalEntry">
          <button
          onClick={handleFormSubmit}
          className="master-text-text"
          >continue</button>
        </Link>
      </div>

    </div>
  )
}


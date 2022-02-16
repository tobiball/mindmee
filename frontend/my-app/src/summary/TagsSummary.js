import './Tags.css'

import { Link } from "react-router-dom";

export default function TagsSummary() {

    return (
      <div className="tags-grid">

        <div className="months-change">
          <i className="material-icons" style={{color: "white"}}>chevron_left</i>
          <h3 className="master-topic-headline">APRIL</h3>
          <i className="material-icons" style={{color: "white"}}>chevron_right</i>
        </div>

        <div className="tag-list-grid">
          <p className="myTags">finals</p>
          <p className="myTags">homework</p>
          <p className="myTags">time</p>
          <p className="myTags">tests</p>
          <p className="myTags">money</p>
          <p className="myTags">bedtime</p>
        </div>

        <Link to="/summary/TagsSummaryDetail">
        <button>insight</button>
      </Link>
      </div>
    )
}


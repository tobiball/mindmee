import './Tags.css'
import './TagsSummaryDetail.css'

import { Link } from "react-router-dom";

export default function TagsSummaryDetail() {
    return (
        <div className="tags-summary-grid ">

        <div className="months-change">
          <i className="material-icons" style={{color: "white"}}>chevron_left</i>
          <h3 className="master-topic-headline">APRIL</h3>
          <i className="material-icons" style={{color: "white"}}>chevron_right</i>
        </div>
        
        <div className="tags-summary-segment">
            <h3 className="master-text-headline">in the morning</h3>
            <div className="tag-list-grid">
            <p className="myTags">finals</p>
            <p className="myTags">homework</p>
            <p className="myTags">timemanagement</p>
            <p className="myTags">tests</p>
            <p className="myTags">money</p>
            <p className="myTags">bedtime</p>
            </div>
        </div>
        
        <div className="tags-summary-segment">
            <h3 className="master-text-headline">around midday</h3>
            <div className="tag-list-grid">
            <p className="myTags">meal</p>
            <p className="myTags">time</p>
            <p className="myTags">timemanagement</p>
            <p className="myTags">money</p>
            </div>
        </div>

        <div className="tags-summary-segment">
            <h3 className="master-text-headline">in the evening</h3>
            <div className="tag-list-grid">
            <p className="myTags">finals</p>
            <p className="myTags">future</p>
            <p className="myTags">money</p>
            <p className="myTags">bedtime</p>
            </div>
        </div>

      </div>
    )
}
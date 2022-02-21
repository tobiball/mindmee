import './SummaryOverview.css'

import MoodSummary from "./MoodSummary"
import TagsSummary from "./TagsSummary"
import JournalSummary from "./JournalSummary"



export default function SummaryOverview() {

  return (

    <div className="overview-grid">
                 <div className="header">
                  <h1>How it is going...</h1>
                  </div>
      

            <div className="overview-content">
              <JournalSummary className="overview-content" />
            </div>


    </div>

  )
}

/*
              <div className="overview-content">
                <MoodSummary />
              </div>
      <div className="overview-content">
        <TagsSummary className="overview-content"/>
      </div>

    */
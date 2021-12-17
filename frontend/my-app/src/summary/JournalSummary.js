import { Link } from "react-router-dom";
import './JournalSummary.css'


export default function JournalSummary() {
    return (
      <div className="journal-summary-grid">

        <div className="months-change">
          <i className="material-icons" style={{color: "white"}}>chevron_left</i>
          <h3 className="master-topic-headline">APRIL</h3>
          <i className="material-icons" style={{color: "white"}}>chevron_right</i>
        </div>

        <div>
          <h3 className="master-text-headline journal-summary-headline">Lorem Ipsum</h3>
          <p className="master-text-text journal-summary-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...</p>
        </div>

        <div>
          <h3 className="master-text-headline journal-summary-headline">Consectetuer Adipiscing</h3>
          <p className="master-text-text journal-summary-text">Dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...</p>
        </div>

        <div>
          <h3 className="master-text-headline journal-summary-headline">Tempor invidunt ut Labore</h3>
          <p className="master-text-text journal-summary-text">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...</p>
        </div>

        <Link to="/summary/JournalSummaryDetail">
          <button>insight</button>
        </Link>

    </div>
    )
  }
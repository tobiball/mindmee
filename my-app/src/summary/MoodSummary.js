import { Link } from "react-router-dom";

export default function MoodSummary() {
    return (
      <div>
        <h2>This is Mood Summary</h2>
        <img src="/assets/img/radar_graph_placeholder.jpg" />
        <br></br>
        <Link to="/summary/MoodSummaryDetail">
        <button>Insight</button>
      </Link>
      </div>
    )
  }
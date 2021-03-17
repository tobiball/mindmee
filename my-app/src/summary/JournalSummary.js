import { Link } from "react-router-dom";


export default function JournalSummary() {
    return (
      <div>
        <h2>This is Journal Summary</h2>
        <div>
        <h3>15. March 2012</h3>
        <p>Cum endant. Escim re nonsed quaspe nat quae doluptation</p>
      </div>
      <div>
        <h3>16. March 2012</h3>
        <p>Cum endant. Escim re nonsed quaspe nat quae doluptation</p>
      </div>
      <div>
        <h3>17. March 2012</h3>
        <p>Cum endant. Escim re nonsed quaspe nat quae doluptation</p>
      </div>
      <Link to="/summary/JournalSummaryDetail">
        <button>Insight</button>
      </Link>
    </div>
    )
  }
import { Link } from "react-router-dom";

export default function JournalEntry() {
  return (
    <div>
      <h2>This is Journal Entry</h2>
      <Link to="/summary/MainSummary">
        <button>Finish</button>
      </Link>
  </div>
  )
}
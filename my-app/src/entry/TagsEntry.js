import { Link } from "react-router-dom";


export default function TagsEntry() {
  return (
    <div>
      <h2>This is Tags Entry</h2>
      <Link to="/entry/JournalEntry">
        <button>Continue</button>
      </Link>
  </div>
  )
}
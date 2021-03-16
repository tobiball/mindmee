import { Link } from "react-router-dom";

export default function MoodEntry() {
  return (
    <div>
      <h2>This is Mood Entry</h2>
      <Link to="/entry/TagsEntry">
        <button>Continue</button>
      </Link>
    </div>
  )
}
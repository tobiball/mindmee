import '../Tags.css'
import { Link } from "react-router-dom";

export default function TagsSummary() {

    return (
      <body>
        <h2>This is Tags Summary</h2>
        <p className="myTags">Tag1</p>
        <p className="myTags">Tag2</p>
        <p className="myTags">Tag3</p>
        <Link to="/summary/TagsSummaryDetail">
        <button>Insight</button>
      </Link>
      </body>
    )
}
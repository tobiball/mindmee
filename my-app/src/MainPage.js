import React from "react";
import {Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
  <h2>Welcome to mindmy</h2>
      <Link to="/entry/MainEntry">
        <button>
          Start an Entry
        </button>
      </Link>
      <Link to="/summary/MainSummary">
        <button>
          View Summary
        </button>
      </Link>
    </div>
  )
}
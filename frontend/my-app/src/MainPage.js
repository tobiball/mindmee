import React from "react";
import  {Link } from "react-router-dom";

import './MainPage.css'

export default function MainPage() {

  const mindmyLogo = {
    width: "80vw"
  }

  return (
    <div className="grid-container">

      <img style={mindmyLogo} src="/assets/img/mindmy-logo.png" alt="This is a placeholder"/>

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
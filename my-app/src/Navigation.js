import { NavLink } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Navigation() {
    return (
        <header>
            <nav>
                <button>
                <NavLink to="/entry/MainEntry">Make a new entry</NavLink>
                </button>
                <button>
                <NavLink to="/summary/MainSummary">View Summary</NavLink>
                </button>
            </nav>
        </header>
    )
}
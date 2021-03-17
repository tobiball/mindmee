import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <header>
            <nav>
                <button onClick={() => window.location.reload(false)}>
                    <NavLink to="/entry/MainEntry">Entry</NavLink>
                </button>
                <button onClick={() => window.location.reload(false)}>
                    <NavLink to="/">Home</NavLink>
                </button>
                <button onClick={() => window.location.reload(false)}>
                    <NavLink to="/summary/MainSummary">Summary</NavLink>
                </button>

            </nav>
        </header>
    )
}
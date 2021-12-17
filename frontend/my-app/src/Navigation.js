import { NavLink } from "react-router-dom";
import './Navigation.css'

export default function Navigation() {

    return (
        <header className="scrolled">
            <nav className="stickyNav">

                <button // MainEntry //
                onClick={() => window.location.reload(false)} 
                style={{border: "none"}}>
                    <NavLink to="/entry/MainEntry">
                        <i className="material-icons" style={{color: "white"}}
                        >edit</i>
                    </NavLink>
                </button>

                <button // Home //
                onClick={() => window.location.reload(false)} 
                style={{border: "none"}}>
                    <NavLink to="/">
                        <i className="material-icons" style={{color: "white"}}
                        >home</i>
                    </NavLink>
                </button>

                <button // Summary // 
                onClick={() => window.location.reload(false)} 
                style={{border: "none"}}>
                    <NavLink to="/summary/MainSummary">
                        <i className="material-icons" style={{color: "white"}}
                        >menu_book</i>
                    </NavLink>
                </button>

            </nav>
        </header>
    )
}
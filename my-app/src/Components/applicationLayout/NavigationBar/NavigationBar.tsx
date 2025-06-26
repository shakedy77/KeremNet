import React, { ReactElement } from "react";

import './NavigationBar.css'
import { Link } from "react-router-dom";

const NavigationBar = () : ReactElement => {
    return <div className="navigation-bar">
        <nav>
            <Link  to="/">
                <button className="option">Home</button>
            </Link>
            <Link to="/PostPage">
                <button className="option">PostPage</button>
            </Link>
            <Link to="/GrapePage">
                <button className="option">GrapePage</button>
            </Link>
        </nav>
    </div>
}

export default NavigationBar;
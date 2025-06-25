import React, { ReactElement } from "react";

import './NavigationBar.css'

const NavigationBar = () : ReactElement => {
    return <div className="navigation-bar">
        <nav>
            <div>home</div>
            <div>option1</div>
            <div>option2</div>
            <div>option3</div>
        </nav>
    </div>
}

export default NavigationBar;
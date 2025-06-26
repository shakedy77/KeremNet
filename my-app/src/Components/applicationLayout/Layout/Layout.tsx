import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";


import NavigationBar from "../NavigationBar/NavigationBar";
import keremLogo from "../../../Assets/imgs/keremNetLogo.png"
import './Layout.css';


const Layout = (): ReactElement => {
    return       <div className="layout">
        <title>Kerem Net </title>
        <div className="title"> <h1>Kerem Net </h1> <img className="logo-picture" src={keremLogo} alt="pic" /></div>
          <NavigationBar/>
            <main>
                <Outlet/>
            </main>

        </div>
}

export default Layout;
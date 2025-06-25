import React, { ReactElement } from "react";

import LoadedPosts from "../../LoadedPosts/LoadedPosts";
import NavigationBar from "../NavigationBar/NavigationBar";
import keremLogo from "../../../Assets/imgs/keremNetLogo.png"

import './Page.css' 

const Page = ():ReactElement =>{
    return <div className="page">
        <title>Kerem Net </title>
        <div className="title"> <h1>Kerem Net </h1> <img className="logo-picture" src={keremLogo} alt="pic" /></div>
        <NavigationBar></NavigationBar>
        <div>
            <div className="post-list">
            <LoadedPosts></LoadedPosts>
            </div>
        </div>
        
    </div>
}

export default Page;
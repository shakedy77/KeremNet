import React, { ReactElement } from "react";

import LoadedPosts from "../../LoadedPosts/LoadedPosts";
import keremLogo from "../imgs/keremNetLogo.png"

import './Page.css' 

const Page = ():ReactElement =>{
    return <div className="Page">
        <title>Kerem Net </title>
        <h1>Kerem Net <img className="logoPicture" src={keremLogo} alt="pic" /></h1>
        <div>
            <div className="PostList">
            <LoadedPosts></LoadedPosts>
            </div>
        </div>
        
    </div>
}

export default Page;
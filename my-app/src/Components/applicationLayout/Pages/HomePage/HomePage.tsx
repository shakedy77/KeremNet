import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import LoadedPosts from "../../../LoadedPosts/LoadedPosts";


import './HomePage.css' 

const HomePage = ():ReactElement =>{
    return <div>
            <div className="post-list">
            <LoadedPosts></LoadedPosts>

            </div>
        </div>
}

export default HomePage;


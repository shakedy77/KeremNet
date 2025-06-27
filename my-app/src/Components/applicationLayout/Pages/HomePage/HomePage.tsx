import React, { ReactElement } from "react";
import LoadedPosts from "../../../LoadedPosts/LoadedPosts";

import './HomePage.css' 

const HomePage = ():ReactElement =>{
    return <div>
            <div className="post-list">
            <LoadedPosts serverPath="http://localhost:3060/post"></LoadedPosts>

            </div>
        </div>
}

export default HomePage;


import React, { ReactElement } from "react";

import LoadedPosts from "../../LoadedPosts/LoadedPosts";

import './Page.css' 

const Page = ():ReactElement =>{
    return <div className="Page">
        <LoadedPosts></LoadedPosts>
    </div>
}

export default Page;
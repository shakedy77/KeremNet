
import React, { useState, useEffect } from "react";



const JsonData = () => {
    const [posts, setPosts] = useState([]);

    const getData = () => {
        const requestOptions = {
        // method: "GET",
        // redirect: "follow",
        };

        fetch("http://localhost:3030/posts", requestOptions)
        .then((response) => response.json())
        .then((result) => setPosts(result))
        .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return posts;

} 


export default JsonData;
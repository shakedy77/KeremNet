
import  { useState, useEffect } from "react";



const JsonData = () => {
    const [posts, setPosts] = useState<Object[]>([]);

    const getData = () => {

        fetch("http://localhost:3030/posts")
        .then((response) => response.json())
        .then((result) => {
            setPosts(result);
        })
        .catch((error) => console.log("error", error));
    
  };

  useEffect(() => {
    getData();
  }, []);

  return posts;

} 


export default JsonData
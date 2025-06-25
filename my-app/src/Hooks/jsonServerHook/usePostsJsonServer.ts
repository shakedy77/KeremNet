
import  { useState, useEffect } from "react";
import PostModel from "../../Models/PostModel/PostModel";



const PostsJsonData = () :  PostModel[]=> {
  const [posts, setPosts] = useState<any[]>([]);

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


export default PostsJsonData

import  { useState, useEffect } from "react";

const mockServerPath : string = "http://localhost:3030/posts"
const serverPath : string = "http://localhost:3060/post"

interface Props{
  path : string;
}


function usePostsJsonData<T>({path} : Props={path:serverPath}){
  const [posts, setPosts] = useState<any[]>([]);

  const getData = () => {

      fetch(path)
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


export default usePostsJsonData
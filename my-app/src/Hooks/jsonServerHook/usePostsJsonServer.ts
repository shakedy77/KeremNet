
import  { useState, useEffect } from "react";

const mockServerPath : string = "http://localhost:3030/posts"
const serverPath : string = "http://localhost:3060/post"

interface Props{
  path : string;
}


function useJsonData<T>({path} : Props={path:serverPath}) : T[]{
  const [data, setData] = useState<any[]>([]);

  const getData = () => {

      fetch(path)
      .then((response) => response.json())
      .then((result) => {
          setData(result);
      })
      .catch((error) => console.log("error", error));
    
  };

  useEffect(() => {
    getData();
  }, []);

  return data;

} 


export default useJsonData
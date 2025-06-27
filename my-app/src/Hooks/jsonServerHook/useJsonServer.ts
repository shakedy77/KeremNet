
import  { useState, useEffect } from "react";

// const mockServerPath : string = "http://localhost:3030/posts"
// const serverPath : string = "http://localhost:3060/post"

interface Props{
  path : string;
}

//returns undefined if data is still loading
function useJsonData<T>({path} : Props) : T[] | undefined{
  const [data, setData] = useState<T[]>([]);

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
  }, [path]);

  return data;

} 


export default useJsonData
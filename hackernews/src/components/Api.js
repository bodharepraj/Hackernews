import React, {useState, useEffect} from 'react';

import List from "./List";

const Api = ({news, setNews,setIsLoading,isLoading}) => {

    const [error, setError] = useState(null);

    console.log(news)

    useEffect(() => {
         
         fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
           .then((response) => response.json())
           .then((json) => {
            setTimeout(() => {
              setIsLoading(false)
          }, isLoading)
      
             console.log(json);
             setNews(json);
           })
           .catch((error) => console.log(error));
    
      }, []);

  return (
  <div>
     
  </div>
  );
}

export default Api;
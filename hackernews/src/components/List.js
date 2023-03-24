import React from "react";


const List = ({news, query}) => {

    return(
        <div>
          <h1>News:{news && news.hits.map(
            hit => <p>{hit.title}</p>
          )}</h1>
        </div>
    ) 
}

export default List
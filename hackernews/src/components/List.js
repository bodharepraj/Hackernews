import React from "react";
import '../index.css';



const List = ({news, query}) => {

    const startTime = new Date().getTime();
console.log(query);
    return(
        <div className="list">
            <ol>
                {news && news.hits.map(
                hit =>  <li>

                          <a  href={hit.url} >  {hit.title}</a>
                             {/* <p>{hit.url}</p> */}
                            <p>{hit.points} Points by {hit.author} {hit.created_at} </p>

                        </li>
                )}
            </ol>

        </div>
    ) 
}

export default List


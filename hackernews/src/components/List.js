import React from "react";
import '../index.css';


const List = ({news, query}) => {

    const printDate = (a) => {
    const date1 = new Date(a).getDate();
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //console.log(diffTime + " milliseconds");
    //console.log(diffDays + " days");
    return diffDays + " days ago  |"
}



  const highlight = (text, query) => {
    if (!text) return "";
    const regex = new RegExp(query, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div className="list">
      <ol>
        {news &&
          news.hits.map((hit, index) => (
            <li>
              <div className="divListFirtLine" >
                <span>{index +1 + ' '}</span>
              {hit.title && (
                  <a href={hit.url} dangerouslySetInnerHTML={{__html: highlight(hit.title, query)}}></a>
                )}
              </div>
              <p>
                {hit.points} Points by {hit.author} {printDate(hit.created_at)}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default List;
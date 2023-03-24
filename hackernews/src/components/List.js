import React from "react";
import '../index.css';


const List = ({news, query, matchExactly, setMatchExactly}) => {
  const startTime = new Date().getTime();
  console.log(query);

  const highlight = (text, query) => {
    if (!text) return "";
    const regex = new RegExp(query, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div className="list">
      <ol>
        {news &&
          news.hits.map((hit) => (
            <li>
              
                {hit.title && (
                  <a href={hit.url} dangerouslySetInnerHTML={{__html: highlight(hit.title, query)}} />

                )}
          
              <p>
                {hit.points} Points by {hit.author} {hit.created_at}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default List;
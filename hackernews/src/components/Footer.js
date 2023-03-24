import React, { useState, useEffect } from 'react';

function Footer({news, setNews, query,setQuery}) {
  // const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
        const data = await res.json();
        setNews(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Error fetching news articles.');
      }
    };
 
    if (query) {
      fetchArticles();
    }
  }, [query]);
  
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <section className="footer">
      <form onSubmit={handleChange}>
        <label>
          <strong>Search</strong>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            id="search"
            placeholder="Search for something"
          />
          <button>Search</button>
        </label>
      </form>
      {/* {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {news && news.hits.map((article) => (
            <li >
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      )} */}
    </section>
  );
}

export default Footer;
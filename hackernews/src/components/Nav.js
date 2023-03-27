import React,{useState, useEffect} from 'react';

const Nav = ({setNews}) => {
  const [last, setLast] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {

    const fetchArticles = async () => {
      try {
        const res = await fetch("http://hn.algolia.com/api/v1/search?tags=story,author_pg");
        const data = await res.json();
        setNews(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Error fetching news articles.');
      }
    };
 
    if (last) {
      fetchArticles();
      
    }
  }, [last]);

  const handleChange = (e) => {
    e.preventDefault();
    setLast(true)
    console.log('click')
    console.log(last)
     
  };

  

 return (
        <nav>
          <ul className="listNav">
              <li className="items"><a onClick={handleChange}>New</a></li>
              <li className="items">Paste</li>
              <li className="items">Comment</li>
              <li className="items">Ask</li>
              <li className="items">Show</li>
              <li className="items">Job</li>
              <li className="items">Submit</li>
            </ul>
          <button className="btn">BTN</button>
        </nav>
      )
    }

export default Nav
import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import Api from './components/Api';
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {

  
  const [news, setNews] = useState();
  const [query, setQuery] = useState();

  return (
    <div className="App">
      <Nav/>
      <Footer news={news} setNews={setNews}  query={query} setQuery={setQuery}/>

      <List news={news} query={query}/>
      <Api news={news} setNews={setNews} />

    </div>
  );
}

export default App;

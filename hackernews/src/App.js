import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import Api from './components/Api';
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {

  
  const [news, setNews] = useState();
  
  return (
    <div className="App">
      <Nav/>
      <List news={news}/>
      
      <Api news={news} setNews={setNews} />
      <Footer news={news} setNews={setNews} />

    </div>
  );
}

export default App;

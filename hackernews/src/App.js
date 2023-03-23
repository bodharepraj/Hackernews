import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import Api from './components/Api';

function App() {

  
  const [news, setNews] = useState();
  
  return (
    <div className="App">
     <List news={news}/>
     <Api news={news} setNews={setNews} />

    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import Api from './components/Api';
import Nav from './components/Nav'
import Footer from './components/Footer'
import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const[isLoading,setIsLoading]=useState(true);
  const [news, setNews] = useState();
  const [query, setQuery] = useState();
  

  
  return (
    <div className="App">
      <Nav/>
      <div className="isLoading"> 
      {isLoading && 
            <CircularProgress color="secondary" /> 
              
            {!isLoading }
             </div>
      
      <List news={news} query={query} />
      <Api news={news} setNews={setNews} setIsLoading={setIsLoading}/>

      <Footer news={news} setNews={setNews}  query={query} setQuery={setQuery}/>
      

    </div>
  );
}

export default App;

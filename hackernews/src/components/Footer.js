import React,{ useState, useEffect} from 'react'

function Footer({news, setNews}){
const[query, setQuery] = useState('')
const[items,setItems] =useState('')
const[largeTitle,setLargeTitle] = useState('')


useEffect(()=> {
    const fetchArticles = async()=>{
        const res= await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
        const data=await res.json()
        setItems(data.hits)
        setNews(data.hits)
        setLargeTitle(data.hits[0])
    }
  
    fetchArticles()
},[query])

const handleChange=(e)=>{
    e.preventDefault();
    setQuery(e.target.value)

}

    return <> 
        <section className="footer">
         <h1>{largeTitle.title}</h1>
            <form onSubmit={handleChange}>
            <label> <strong>Search</strong> 
                <input onChange={handleChange}  type="text" name="search" id="search" placeholder="Search for something" />
                <button>Search</button>
                </label>
            </form>
        </section>
    </>
}

export default Footer
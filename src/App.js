import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg' 

//16074f9e
const API_URL=' http://www.omdbapi.com/?i=tt3896198&apikey=16074f9e'

const  App= () => {
    const searchMovies= async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data= await response.json();
        console.log(data.Search);
    }
    useEffect(()=>{
       searchMovies('Spiderman');
    },[]);

    return ( 
        <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
            placeholder="Search for movies"
            value="Superman"
            onchange={()=>{}}
            />

            <img
            src={SearchIcon}
            alt="search"
            />
        </div>
        </div>
     );
}
 
export default App;
import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg' 

//16074f9e
const API_URL=' http://www.omdbapi.com/?i=tt3896198&apikey=16074f9e'

const movie1={
    Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
Title: "Italian Spiderman",
Type: "movie",
Year: "2007",
imdbID: "tt2705436"
}

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
            onChange={()=>{}}//shall call api fro here
            />

            <img
            src={SearchIcon}
            alt="search"
            />
        </div>
        <div className="container">
        <div className="movie">
            <div>
                <p>{movie1.Title} </p>
            </div>
            <div>
                <img 
                src={movie1.Poster !=='N/A'? movie1.Poster :'https://via.placeholder.com/400'} alt={movie1.Title}
                />
            </div>

            <div>
                <span> {movie1.Type}</span>
                <h3> {movie1.Title}</h3>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default App;
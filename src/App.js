import {useEffect,useState} from "react";
import './App.css';
import SearchIcon from './search.svg' 
import MovieCard from './MovieCard'
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
    //new state to dispaly movies
    const [movies,setMovies]=useState([])
    const searchMovies= async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data= await response.json();

        setMovies(data.Search);
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
        {
            movies?.length>0?(
                <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
                </div>   
            ):
            (
                <div className="empty">
                    <h2> No movies found</h2>
                    </div>
            )
        }
       
        </div>
     );
}
 
export default App;
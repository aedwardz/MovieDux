import React, { useEffect } from 'react';
import '../styles.css';
import {useState} from 'react';
import MovieCard from './MovieCard';


//we want the movie data tio populate the grid so that it is dynamuic and reusable.
//there will be an api call to actually get the movie data  but it is simulated in 
// the system by just reading from a json data file

export default function MoviesGrid({movies, watchList,registerToggle}) {

    const [searchText, setSearchText] = useState("");

    


    


    const handleSearchChange = (event) => {
        setSearchText(event.target.value) 
    }

    const addToWatchList = (id) => {
        console.log(id)
        registerToggle(id);
    }

    const filteredMovies = movies.filter( (movie) => {
        return movie.title.toLowerCase().includes(searchText)
    }
    )

    return (

        <div>
            <input
            value = {searchText}
            onChange = {handleSearchChange}
            ></input>
            <div className="movies-grid">
            {
            filteredMovies.map((movie) => (
                <div>
                    <MovieCard movie= {movie} key={movie.id}></MovieCard>
                    <button onClick={() => (addToWatchList(movie.id))}> + </button>
                </div>
                        
            ))
            }

        </div>
        </div>
        
    );
}
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
      const [movies, setMovies] = useState([]);
      const [watchList, setWatchList] = useState([])
      useEffect(() => {
        
        async function fetchMovies() {
           
            const response = await fetch("movies.json");
            const data = await response.json();
            setMovies(data);
        }

        fetchMovies();

    }, []);


    const toggleWatchList = (movie)  => {
        setWatchList([...watchList, movie]) 
        console.log(watchList);
    }

    const watchListMovies = 
      movies.filter( movie => {
        return watchList.includes(movie.id)
      });
    
      console.log(watchListMovies);
    
  
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchList={watchList} registerToggle={toggleWatchList}/> }></Route>
            <Route path="/watchlist" element={<WatchList movies={watchListMovies}/>}></Route>
          </Routes>
        </Router>
      <Footer></Footer>
      </div>
      
    </div>);
}

export default App;

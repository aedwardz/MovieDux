import MoviesGrid from "./MoviesGrid"

export default function WatchList({movies}) {
    return (<div>
        <h1 className="container">Your Watchlist</h1>
        <MoviesGrid movies={movies}></MoviesGrid>

    </div>)
}
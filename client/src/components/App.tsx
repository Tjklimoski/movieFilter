import { useState, useMemo } from "react";
import Filters from "./Filters";
import Movies from "./Movies";
import useTMDB from "../hooks/useTMDB";

function App() {
  const [movies, loading, error] = useTMDB();
  // genre is a number, as specifed by TMDB, 0 is all.
  const [genre, setGenre] = useState(0);
  const filteredMovies = useMemo(() => {
    if (genre === 0) return movies;
    return movies.filter((movie) => movie.genre_ids.includes(genre));
  }, [genre, movies]);

  function updateGenre(genre: number) {
    setGenre(genre);
  }

  return (
    <>
      <div className="page-wrapper">
        <Filters updateGenre={updateGenre} currentGenre={genre} />
        {loading && <h3>LOADING...</h3>}
        {error && <p className="error-msg">{error}</p>}
        {!loading && <Movies movies={filteredMovies} />}
      </div>
    </>
  );
}

export default App;

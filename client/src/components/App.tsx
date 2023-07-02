import Filters from "./Filters";
import Movies from "./Movies";
import useTMDB from "../hooks/useTMDB";

function App() {
  const [movies, loading, error] = useTMDB();

  return <>
    {loading && <h1>LOADING</h1>}
    {error && <p>{error}</p>}
    {!loading &&
    <>
      <Filters />
      <Movies movies={movies}/>
    </>
    }
  </>
}

export default App;

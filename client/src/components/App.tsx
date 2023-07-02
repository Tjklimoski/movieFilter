import Filters from "./Filters";
import Movies from "./Movies";
import useTMDB from "../hooks/useTMDB";

function App() {
  const [movies, loading, error] = useTMDB();

  return <>
    {loading && <h1>LOADING</h1>}
    {error && <p>{error}</p>}
    {!loading &&
    <div className="page-wrapper">
      <Filters />
      <Movies movies={movies}/>
    </div>
    }
  </>
}

export default App;

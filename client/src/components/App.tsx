import Filters from "./Filters";
import Movies from "./Movies";
import useTMDB from "../hooks/useTMDB";

function App() {
  useTMDB();

  return <>
    <Filters />
    <Movies />
  </>
}

export default App

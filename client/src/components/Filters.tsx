
type FiltersProps = {
  updateGenre: (genre: number) => void
}

export default function Filters({ updateGenre }: FiltersProps) {
  // genre number is specified by TMDB's API
  // all - 0
  // action - 28
  // comedy - 35
  // horror - 27

  return (
    <div id="filter-btns">
      <button className="btn" onClick={() => updateGenre(0)} data-active="true">All</button>
      <button className="btn" onClick={() => updateGenre(28)}>Action</button>
      <button className="btn" onClick={() => updateGenre(35)}>Comedy</button>
      <button className="btn" onClick={() => updateGenre(27)}>Horror</button>
    </div>
  )
}

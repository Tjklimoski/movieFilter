import FilterBtn from "./FilterBtn"

type FiltersProps = {
  updateGenre: (genre: number) => void
  currentGenre: number
}

// genre number is specified by TMDB's API
// all - 0
// action - 28
// comedy - 35
// horror - 27

const FILTERS = [
    {
      genreName: 'All',
      id: 0,
    },
    {
      genreName: 'Action',
      id: 28,
    },
    {
      genreName: 'Comedy',
      id: 35,
    },
    {
      genreName: 'Horror',
      id: 27,
    },
  ]

export default function Filters(props: FiltersProps) {

  return (
    <div id="filter-btns">
      {FILTERS.map(filter => {
        return <FilterBtn key={filter.id} {...props} {...filter}/>
      })}
    </div>
  )
}

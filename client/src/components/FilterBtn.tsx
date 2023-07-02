
type FilterBtnProps = {
  updateGenre: (genre: number) => void
  currentGenre: number
  genreName: string
  id: number
}

export default function FilterBtn({ updateGenre, currentGenre, genreName, id }: FilterBtnProps) {
  
  const active = currentGenre === id;

  return (
    <button 
      className="btn" 
      onClick={() => updateGenre(id)} 
      data-active={ active ? "true" : "false"}
    >
      {genreName}
    </button>
  )
}

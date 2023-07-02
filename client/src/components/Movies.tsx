import Movie from './Movie';
import { MovieData } from '../hooks/useTMDB';

type MovieProps = {
  movies: MovieData[]
}

export default function Movies({ movies }: MovieProps) {
  return (
    <div className='movies-wrapper'>
      {movies.map(movie => {
        return <Movie key={movie.id} title={movie.title} imgPath={movie.poster_path} avgRating={movie.vote_average} />
      })}
    </div>
  )
}

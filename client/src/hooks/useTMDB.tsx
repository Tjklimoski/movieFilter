import { useState, useEffect } from 'react'
import axios from 'axios';

export interface MovieData {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default function useTMDB() {
  const [movies, setMovies] = useState<MovieData[]>([] as MovieData[])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/popular-movies')
      .then(res => res.data)
      .then(data => setMovies(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return [movies, loading, error] as [MovieData[], typeof loading, typeof error]

}

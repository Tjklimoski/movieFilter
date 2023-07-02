
type MovieProps = {
  title: string
  imgPath: string
  avgRating: number
}

export default function Movie({ title, imgPath, avgRating }: MovieProps) {

  const baseUrl = 'https://image.tmdb.org/t/p'
  const size = '/w500'
  const imgUrl = `${baseUrl}${size}${imgPath}`

  return (
    <div className="movie">
      <span className="movie-title">{title}</span>
      <img src={imgUrl} alt={`${title} poster`} />
      <span>{avgRating}</span>
    </div>
  )
}

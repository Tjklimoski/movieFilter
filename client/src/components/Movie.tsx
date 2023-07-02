import { motion } from "framer-motion";

type MovieProps = {
  title: string;
  imgPath: string;
  avgRating: number;
};

export default function Movie({ title, imgPath, avgRating }: MovieProps) {
  const baseUrl = "https://image.tmdb.org/t/p";
  const size = "/w500";
  const imgUrl = `${baseUrl}${size}${imgPath}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.3 } }}
      className="movie"
    >
      <div className="movie-title">{title}</div>
      <img src={imgUrl} alt={`${title} poster`} />
      <div
        className="rating"
        data-rating={
          avgRating > 7.5 ? "high" : avgRating > 5 ? "medium" : "low"
        }
      >
        {avgRating}
      </div>
    </motion.div>
  );
}

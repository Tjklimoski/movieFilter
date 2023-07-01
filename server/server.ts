import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

const TMDBApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.API_KEY
  }
})

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET']
}))

app.get('/popular-movies', (req, res) => {

  //get request to TMDB for their list of popular movies
  TMDBApi.get('/movie/popular', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then(res => res.data.results)
    .then(results => res.send(results))
    .catch(err => res.status(400).send())
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
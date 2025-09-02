import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQyM2ZkMmVlZjA5ZmNiZDZjOWNjMTYxNDA0ZGQ1NiIsIm5iZiI6MTc1NjczNDgwMy4wOTMsInN1YiI6IjY4YjVhNTUzNWQ0YjI2ZDk1ZDE1ODNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-CPXabTzinQLEc4R8MOumdnrAVliFo-47LwgOPLnpc",
  },
});

export default tmdb;

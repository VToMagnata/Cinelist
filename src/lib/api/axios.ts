import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.AUTORIZATION}`,
  },
});

export default tmdb;

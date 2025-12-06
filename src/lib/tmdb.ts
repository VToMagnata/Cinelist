import axios from "axios";

const TMBD_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.TMBD_TOKEN}`, // SERVER-ONLY
  },
});

export default TMBD_API;

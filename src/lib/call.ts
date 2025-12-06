import TMDB_API from "./tmdb";
import { Filme } from "@/type";

type Data = {
  results: Filme[];
};

export const getFilmes = async () => {
  const res = await TMDB_API.get<Data>("/trending/movie/day?language=pt-BR");
  return res.data.results;
};

export const getFilmesAlta = async () => {
  const res = await TMDB_API.get<Data>("/trending/all/day?language=pt-BR");
  return res.data.results;
};

export const getDetails = async (id: number): Promise<Filme> => {
  const res = await TMDB_API.get<Filme>(`/movie/${id}?language=pt-BR`);
  return res.data;
};

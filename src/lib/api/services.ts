import axios from "axios";
import tmdb from "./axios";
import { Filme } from "@/types/type";

type FilmList = {
  results: Filme[];
};

async function GetTrendingFilms() {
  try {
    const response = await tmdb.get<FilmList>(
      "/trending/movie/day?language=pt-BR"
    );
    return response.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function GetTopFilms() {
  try {
    const response = await tmdb.get<FilmList>(
      "/movie/popular?language=pt-BR&page=1"
    );
    return response.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function GetDetails(id: number): Promise<Filme | undefined> {
  try {
    const res = await tmdb.get<Filme>(`/movie/${id}?language=pt-BR`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default GetTrendingFilms;

import GetTrendingFilms from "@/lib/api/services";
import Grid from "./components/Grid";

export default async function Home() {
  const FilmesList = await GetTrendingFilms();

  return (
    <main className="w-full h-full  flex justify-center items-center bg-gradient-to-b from-black to-gray-900">
      <Grid filmes={FilmesList} />
    </main>
  );
}

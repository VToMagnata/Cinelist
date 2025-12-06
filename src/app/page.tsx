import Header from "./components/Header";
import Grid from "./components/Grid";
import { getFilmes } from "@/lib/call";

const Home = async () => {
  const filmes = await getFilmes();
  return (
    <main className="flex flex-col items-center justify-center bg-black">
      <Header />
      <Grid filmes={filmes} />
    </main>
  );
};

export default Home;

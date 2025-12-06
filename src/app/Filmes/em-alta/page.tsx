import Header from "@/app/components/Header";
import Grid from "@/app/components/Grid";
import { getFilmesAlta } from "@/lib/call";

const EmAlta = async () => {
  const filmes = await getFilmesAlta();
  return (
    <main className="flex flex-col items-center justify-center bg-black">
      <Header />
      <Grid filmes={filmes} />
    </main>
  );
};

export default EmAlta;

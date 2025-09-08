import Artigos from "@/lib/Artigos.json";
import Grid from "./components/Grid";

export default async function Home() {
  return (
    <main className="w-full h-full  flex justify-center items-center bg-gradient-to-b from-black to-gray-900">
      <Grid artigos={Artigos} />
    </main>
  );
}

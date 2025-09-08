import Artigos from "@/lib/Artigos2.json";
import Grid from "@/app/components/Grid";

export default async function PageAlta() {
  return (
    <main className="w-full h-full flex justify-center items-center bg-gradient-to-b from-black to-gray-900">
      <Grid artigos={Artigos} />
    </main>
  );
}

import { getDetails } from "@/lib/call";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const filme = await getDetails(id); // <--- ESSA LINHA AQUI RESOLVE

  if (!filme) {
    return <h1>Filme não encontrado</h1>;
  }

  return (
    <main className="w-screnn h-screen p-6 flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-[#1A1A1A] rounded-xl p-4 gap-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          className="w-72 rounded-xl mt-4"
        />
        <h1 className="text-3xl font-bold">{filme.title}</h1>
        <p className="mt-4 text-center text-lg max-w-xl">{filme.overview}</p>
      </div>
    </main>
  );
}

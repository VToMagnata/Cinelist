import { GetDetails } from "@/lib/api/services";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

const DetalhesFilme = async ({ params }: Props) => {
  const { id } = await params;
  const details = await GetDetails(id);
  return (
    <div
      style={{ height: "calc(100vh - 5em)" }}
      className="w-full flex justify-center items-center"
    >
      <main className="bg-[#1f1f1f] sm:w-[80%] lg:w-[50%] w-[90%] h-[90%] flex flex-col text-center justify-center items-center rounded-xl">
        <img
          src={`https://image.tmdb.org/t/p/w300${details?.poster_path}`}
          alt={details?.original_title}
          className="lg:w-[45%] sm:w-[60%] w-[70%] h-[60%] rounded-xl"
        />
        <h1 className="text-red-500 m-4 text-[2em]">
          {details?.original_title}
        </h1>
        <p>{details?.overview}</p>
      </main>
    </div>
  );
};

export default DetalhesFilme;

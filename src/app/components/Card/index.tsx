import { Filme } from "@/types/type";
import Link from "next/link";

type Props = {
  filme: Filme;
};

export default function Card({ filme }: Props) {
  const { id, original_title, overview, poster_path } = filme;
  const resume =
    overview?.length >= 200 ? `${overview.substring(0, 200)}...` : overview;

  return (
    <Link
      href={`/filmes/${id}`}
      className="w-[90%] h-[30em] flex flex-col bg-[#1f1f1f] justify-start items-center rounded-xl text-center transform transition duration-300 hover:scale-110"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={`Poste de ${original_title}`}
        className="w-full h-[60%] rounded-tl-xl rounded-tr-xl"
      />
      <h1 className="m-2 font-bold text-red-500">{original_title}</h1>
      <p className="italic">{resume}</p>
    </Link>
  );
}

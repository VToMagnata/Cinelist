import type { Filme } from "@/type";
import Link from "next/link";

type Props = {
  filme: Filme;
};

const Card = ({ filme }: Props) => {
  return (
    <article className="rounded-xl p-4 max-w-[18rem] bg-[#1A1A1A]">
      <Link href={`/Filmes/${filme.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          className="w-full h-80 rounded-xl object-cover"
        />
      </Link>
      <h1 className="text-center text-lg mt-2 line-clamp-2">{filme.title}</h1>
    </article>
  );
};

export default Card;

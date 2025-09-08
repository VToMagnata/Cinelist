import { Artigo } from "@/types/type";
import Link from "next/link";

type Props = {
  artigo: Artigo;
};

export default function Card({ artigo }: Props) {
  const { id, conteudo, titulo, autor, data } = artigo;
  const resume =
    conteudo?.length >= 200 ? `${conteudo.substring(0, 200)}...` : conteudo;

  return (
    <Link
      href={`/artigos/${id}`}
      className="w-[90%] h-[30em] gap-8 flex flex-col bg-[#1f1f1f] justify-start items-center rounded-xl text-center transform transition duration-300 hover:scale-110"
    >
      <h1 className="m-2 font-bold text-red-500">{titulo}</h1>
      <h2 className="italic, text-gray-700">{autor}</h2>
      <h3>{data}</h3>
      <p className="italic">{resume}</p>
    </Link>
  );
}

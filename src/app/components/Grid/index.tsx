import { Filme } from "@/types/type";
import Card from "../Card";

type Props = {
  filmes: Filme[];
};

export default function Grid({ filmes }: Props) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 sm:p-8 gap-8 justify-items-center">
      {filmes.map((filme) => (
        <Card key={filme.id} filme={filme} />
      ))}
    </main>
  );
}

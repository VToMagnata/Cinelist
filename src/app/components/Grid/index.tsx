import { Artigo } from "@/types/type";
import Card from "../Card";

type Props = {
  artigos: Artigo[];
};

export default function Grid({ artigos }: Props) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 sm:p-8 gap-8 justify-items-center">
      {artigos.map((artigo) => (
        <Card key={artigo.id} artigo={artigo} />
      ))}
    </main>
  );
}

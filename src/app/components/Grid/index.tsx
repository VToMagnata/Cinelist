import type { Filme } from "@/type";
import Card from "../Card";

type Props = {
  filmes: Filme[];
};

const Grid = ({ filmes }: Props) => {
  return (
    <main className="grid grid-cols-4 gap-8 justify-center">
      {filmes.map((item) => (
        <Card key={item.id} filme={item} />
      ))}
    </main>
  );
};

export default Grid;

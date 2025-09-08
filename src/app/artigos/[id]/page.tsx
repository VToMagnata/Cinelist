import Artigos from "@/lib/Artigos.json";

type Props = {
  params: {
    id: number;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  const artigo = Artigos.find((item) => item.id === Number(params.id));

  if (!artigo) {
    return { title: "Artigo não encontrado", description: "" };
  }

  return {
    title: `${artigo.titulo}`,
    description: artigo.conteudo,
  };
};

const DetalhesFilme = ({ params }: Props) => {
  const detalhes = Artigos.find((item) => item.id === Number(params.id));
  return (
    <div
      style={{ height: "calc(100vh - 5em)" }}
      className="w-full flex justify-center items-center"
    >
      <main className="bg-[#1f1f1f] sm:w-[80%] lg:w-[50%] w-[90%] h-[90%] gap-8 flex flex-col text-center justify-center items-center rounded-xl">
        <h1 className="text-red-500 m-4 text-[2em]">{detalhes?.titulo}</h1>
        <h2 className="italic text-gray-700">{detalhes?.autor}</h2>
        <p>{detalhes?.conteudo}</p>
      </main>
    </div>
  );
};

export default DetalhesFilme;

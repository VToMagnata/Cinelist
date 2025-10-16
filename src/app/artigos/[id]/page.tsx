import Artigos from "@/lib/Artigos.json";

type Props = {
  params: {
    id: string; // <-- IMPORTANTE: id vem como string da URL
  };
};

export const generateMetadata = async ({ params }: Props) => {
  // o id na URL é string, então convertemos pra number ao procurar
  const artigo = (Artigos as Array<{ id: number; titulo: string; conteudo: string }>).find(
    (item) => item.id === Number(params.id)
  );

  if (!artigo) {
    return { title: "Artigo não encontrado", description: "" };
  }

  return {
    title: `${artigo.titulo}`,
    description: artigo.conteudo,
  };
};

const DetalhesFilme = ({ params }: Props) => {
  const detalhes = (Artigos as Array<{ id: number; titulo: string; autor?: string; conteudo?: string }>).find(
    (item) => item.id === Number(params.id)
  );

  if (!detalhes) {
    return (
      <div style={{ height: "calc(100vh - 5em)" }} className="w-full flex justify-center items-center">
        <main className="bg-[#1f1f1f] sm:w-[80%] lg:w-[50%] w-[90%] h-[90%] gap-8 flex flex-col text-center justify-center items-center rounded-xl">
          <h1 className="text-red-500 m-4 text-[2em]">Artigo não encontrado</h1>
        </main>
      </div>
    );
  }

  return (
    <div style={{ height: "calc(100vh - 5em)" }} className="w-full flex justify-center items-center">
      <main className="bg-[#1f1f1f] sm:w-[80%] lg:w-[50%] w-[90%] h-[90%] gap-8 flex flex-col text-center justify-center items-center rounded-xl">
        <h1 className="text-red-500 m-4 text-[2em]">{detalhes.titulo}</h1>
        <h2 className="italic text-gray-700">{detalhes.autor}</h2>
        <p>{detalhes.conteudo}</p>
      </main>
    </div>
  );
};

export default DetalhesFilme;

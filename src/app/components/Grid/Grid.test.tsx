import { render, screen } from "@testing-library/react";
import Grid from ".";
import { Artigo } from "@/types/type";
import "@testing-library/jest-dom";

test("Renderiza os card com os valores corretos", () => {
  const artigos: Artigo[] = [
    {
      id: 1,
      titulo: "Teste",
      autor: "Vitor",
      data: "2025-10-16",
      conteudo: "Conteúdo de teste",
    },
  ];

  render(<Grid artigos={artigos} />);
  expect(screen.getByText("Teste")).toBeInTheDocument();
});

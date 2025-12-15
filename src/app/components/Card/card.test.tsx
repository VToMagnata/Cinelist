import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from ".";

it("Render the card with correct information", () => {
  const Filme = {
    id: 1,
    title: "test",
    overview: "Portugues manitos",
    poster_path: null,
  };

  render(<Card filme={Filme} />);

  const title = screen.getByRole("heading", {
    level: 1,
    name: "test",
  });

  expect(title).toBeInTheDocument();
});

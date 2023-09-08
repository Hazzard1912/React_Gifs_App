import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Prueba de <GifExpertApp/>", () => {
  test("Debe mostrar categorias cuando se carga el componente", () => {
    render(<GifExpertApp />);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });

  test("Debe mostrar el componente AddCategory", () => {
    render(<GifExpertApp />);
    expect(screen.getByRole("form"));
  });

  test("Debe renderizarse otra categoria si onAddCategory recibe un input que no existe", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Naruto" } });
    fireEvent.submit(form);

    expect(screen.getByText("Naruto"));
  });

  test("No debe renderizar otra categoria si onAddCategory recibe un input repetido", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });
});

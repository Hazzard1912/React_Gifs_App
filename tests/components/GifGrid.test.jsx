import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Mock traduce 'imitar'
jest.mock("../../src/hooks/useFetchGifs");

describe("Prueba de <GifGrid/>", () => {
  const category = "One Punch";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes", () => {
    
    // Datos ficticios de retorno.
    const gifs = [
      {
        id: "abc",
        title: "saitama",
        url: "Hola mundo",
      },
      {
        id: "abcd",
        title: "saitama2",
        url: "Hola mundo2",
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});

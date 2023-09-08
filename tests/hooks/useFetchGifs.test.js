import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Prueba del hook customizado useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe retornar un arreglo de gifs y el isLoading en false", async () => {
    
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Como debemos esperar a que haga el fetch y de ese modo
    // cargar los gifs en la variable de estado gifs, usamos esto

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      url: expect.any(String),
      title: expect.any(String),
    });
    expect(isLoading).toBe(false);
  });
});

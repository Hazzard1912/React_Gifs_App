import { string } from "prop-types";
import { getGifs } from "../../src/helpers/GetGifs";

describe("Prueba de GetGifs", () => {
  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
    // Asi probamos que un objeto debe tener cierta estructura
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

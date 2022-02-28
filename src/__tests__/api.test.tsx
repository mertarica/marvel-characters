import CharacterService from "../services/character.service";

describe("API", () => {
  it("the characters list should be get correctly.", () => {
    return CharacterService.getAll(0).then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data?.count).toBeGreaterThan(0);
    });
  });

  it("the character should be get correctly.", () => {
    return CharacterService.get("1017100").then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data?.count).toBeGreaterThan(0);
    });
  });

  it("the comic list of character should be get correctly.", () => {
    return CharacterService.getComicsByCharacter("1017100").then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data?.count).toBeGreaterThan(0);
    });
  });
});

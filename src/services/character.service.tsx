import http from "./http-common";
import { ICharacterDataWrapper } from "../types/character.type";
import { IComicDataWrapper } from "../types/comic.type";

const CHAR_LIMIT = 30;
const COMIC_LIMIT = 10;

class CharacterService {
  getAll(offset: number) {
    return http.get<ICharacterDataWrapper>(
      `/v1/public/characters?limit=${CHAR_LIMIT}&offset=${offset}`
    );
  }
  get(id: string) {
    return http.get<ICharacterDataWrapper>(`/v1/public/characters/${id}`);
  }
  getComicsByCharacter(id: string) {
    return http.get<IComicDataWrapper>(
      `/v1/public/characters/${id}/comics?limit=${COMIC_LIMIT}&orderBy=-modified`
    );
  }
}
export default new CharacterService();

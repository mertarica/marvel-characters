import { IImage, IUrl } from "./common.type";

export interface ICharacterDataWrapper {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: ICharacterDataContainer;
  etag?: string;
}

export interface ICharacterDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Array<ICharacter>;
}

export interface ICharacter {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourseURI?: string;
  urls?: Array<IUrl>;
  thumbnail?: IImage;
  comics?: IComicList;
  events?: { available: number };
  series?: { available: number };
  stories?: { available: number };
}

export interface IComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<IComicSummary>;
}

export interface IComicSummary {
  resourceURI?: string;
  name?: string;
}

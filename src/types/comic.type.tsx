import { IImage, IUrl } from "./common.type";

export interface IComicDataWrapper {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: IComicDataContainer;
  etag?: string;
}

export interface IComicDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Array<IComic>;
}

export interface IComic {
  id?: number;
  digitalId?: number;
  title?: string;
  description?: string;
  variantDescription?: string;
  pageCount?: number;
  modified?: Date;
  resourseURI?: string;
  urls?: Array<IUrl>;
  thumbnail?: IImage;
  images?: Array<IImage>;
  dates?: Array<IComicDate>;
}

export interface IComicDate {
  type?: string;
  date?: Date;
}

import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ContentfulImage {
  title: string;
  file: {
    url: string;
  };
}

export interface ContentfulEvent {
  name: string;
  url: string;
  imageSrc: string;
  eventDescription: string;
  eventPicture: Entry<ContentfulImage>;
}

export interface ContentfulDocMeta {
  title: string;
  chapter: string;
  subchapter: string;
  section: string;
  content?: string;
  slug?: string;
  post?: Document;
}
export interface ContentfulKudoBoard{
  name: string,
  people: Entry<ContentfulPerson>[]
}
export interface ContentfulPerson{
  name: string,
  content: Entry<ContentfulKudos>[]
}
export interface ContentfulKudos{
  text: string;
  writer: string;
}

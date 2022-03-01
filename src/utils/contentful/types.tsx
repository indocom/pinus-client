import { Entry, Asset } from "contentful";
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
  description: Document;
  eventPicture: Entry<ContentfulImage>;
}

export interface ContentfulDocAdmissionMeta {
  title: string;
  chapter: string;
  subchapter: string;
  section: string;
  content?: string;
  slug?: string;
  post?: Document;
}
export interface ContentfulKudoBoard {
  name: string;
  people: Entry<ContentfulPerson>[];
}
export interface ContentfulPerson {
  name: string;
  content: Entry<ContentfulKudo>[];
}
export interface ContentfulKudo {
  text: string;
  writer: string;
  image: Asset;
}
export interface ClientKudo extends ContentfulKudo {
  imageUrl: string;
}

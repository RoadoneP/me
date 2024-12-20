import { default as MBS } from "./MBS";
import { default as Aloha } from "./Aloha";
import { default as Edge } from "./Edge";
import { default as Squid } from "./Squid";

const en: ProjectType[] = [
  MBS,
  Aloha,
  Edge,
  Squid,
];

const projects = { en, ko: en };

export default projects;

import { default as MBS } from "./MBS";
import { default as Aloha } from "./Aloha";
import { default as Edge } from "./Edge";
import { default as Squid } from "./Squid";
import { default as PoliceLab } from "./PoliceLab";
import { default as Glovis } from "./Glovis";
import { default as PRVR } from "./PRVR";

const en: ProjectType[] = [
  PRVR,
  MBS,
  Glovis,
  PoliceLab,
  Aloha,
  Edge,
  Squid,
];

const projects = { en, ko: en };

export default projects;

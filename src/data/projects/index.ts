import { default as Aloha } from "./Aloha";
import { default as Edge } from "./Edge";
import { default as GUS } from "./GUS";
import { default as GLAClip } from "./GLAClip";
import { default as Glovis } from "./Glovis";
import { default as MBS } from "./MBS";
import { default as PRVR } from "./PRVR";
import { default as PoliceLab } from "./PoliceLab";
import { default as Squid } from "./Squid";

const en: ProjectType[] = [GLAClip, PRVR, GUS, MBS, Glovis, PoliceLab, Aloha, Edge, Squid];

const projects = { en, ko: en };

export default projects;

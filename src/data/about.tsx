import { BioEn, BioKo, ProfileImage } from "@/data/bio";

const en: AboutType = {
  name: "Gilhan Park",
  description: "박길한",
  pageTitle: "Gilhan Park",
  pageDescription: "Gilhan's Personal Page",
  Bio: BioEn,
  profileImage: ProfileImage,
};

const ko: AboutType = {
  name: "박길한",
  pageTitle: "박길한",
  description: "Gilhan Park",
  pageDescription: "Gilhan's Personal Page",
  Bio: BioKo,
  profileImage: ProfileImage,
};

export const about = { en, ko };

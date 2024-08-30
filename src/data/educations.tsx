const educations_en: CareerType[] = [
  {
    title: "Sungkyunkwan University",
    role: "Master of Engineering in Artificial Intelligence",
    location: "Suwon, South Korea",
    date: "Mar. 2023 - Present",
    description: "GPA: 3.94/4.5",
    url: "https://ai.skku.edu",
  },
  {
    title: "Sungkyunkwan University",
    role: "Bachelor of Science in Computer Science and Education",
    location: "Seoul, South Korea",
    date: "Mar. 2017 - Feb. 2023",
    description: "GPA: 3.94/4.5",
    url: "https://comedu.skku.edu",
  },
  {
    title: "Konghang High School",
    role: "Graduated",
    location: "Seoul, South Korea",
    date: "Mar. 2013 - Feb. 2016",
    url: "https://konghang.sen.hs.kr/",
  },
];

const educations_ko: CareerType[] = [
  {
    title: "성균관대학교",
    role: "인공지능학과 석사과정 (2025년 2월 졸업 예정)",
    location: "수원, 대한민국",
    date: "2023년 3월 - 현재",
    description: "학점: 3.94/4.5",
    url: "https://ai.skku.edu",
  },
  {
    title: "성균관대학교",
    role: "컴퓨터교육과 이학사",
    location: "서울, 대한민국",
    date: "2017년 3월 - 2023년 2월",
    description: "학점: 3.94/4.5",
    url: "https://comedu.skku.edu",
  },
  {
    title: "공항고등학교",
    role: "졸업",
    location: "서울, 대한민국",
    date: "2013년 3월 - 2016년 2월",
    url: "https://konghang.sen.hs.kr/",
  },
];

export const educations: I18nData = {
  en: educations_en,
  ko: educations_ko,
};

export default function sitemap() {
  return [
    {
      url: "https://www.roadonep.me/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        ko: "https://www.roadonep.me/ko",
        en: "https://www.roadonep.me",
      },
    },
  ];
}

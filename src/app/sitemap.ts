export default function sitemap() {
  return [
    {
      url: "https://www.gilhanpark.me/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        en: "https://www.gilhanpark.me",
        ko: "https://www.gilhanpark.me/ko",
      },
    },
  ];
}

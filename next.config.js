const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  i18n: {
    locales: ["en", "ko"], // 지원하는 언어들
    defaultLocale: "en",   // 기본 언어
  },
};

module.exports = withMDX(nextConfig);

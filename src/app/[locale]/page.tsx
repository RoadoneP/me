import { Main } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gilhan Park 박길한",
  description: "My Personal Page",
};

export default function Index({
  params: { locale },
}: {
  params: { locale: Language };
}) {
  return <Main locale={locale} />;
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ko' },
    // 지원하는 모든 locale을 여기에 추가
  ];
}
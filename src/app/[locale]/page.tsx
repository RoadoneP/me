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
import { Main } from "@/components";
import type { Metadata } from "next";

export default function Index({
  params: { locale },
}: {
  params: { locale: Language };
}) {
  return <Main locale={locale} />;
}

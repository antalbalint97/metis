import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Életképek | Metis",
  description: "Emberek és élethelyzetek, akikről a nagy médiumok nem forgatnak.",
  alternates: { canonical: "/eletkepek" },
  openGraph: { url: "/eletkepek" },
};

export default function Page() {
  return <SectionPage section="eletkepek" />;
}

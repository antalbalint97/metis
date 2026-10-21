import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Vita | Metis",
  description: "Két álláspont, egy asztal, moderátorral.",
  alternates: { canonical: "/vita" },
  openGraph: { url: "/vita" },
};

export default function Page() {
  return <SectionPage section="vita" />;
}

import type { Metadata } from "next";
import { SectionPage } from "@/components/site/SectionPage";

export const metadata: Metadata = {
  title: "Beszélgetések | Metis",
  description: "Hosszú, vágatlan beszélgetések a közéletről, az iskoláról és a munkáról.",
  alternates: { canonical: "/beszelgetesek" },
  openGraph: { url: "/beszelgetesek" },
};

export default function Page() {
  return <SectionPage section="beszelgetesek" />;
}

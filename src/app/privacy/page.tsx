import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatvédelem | Metis",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="ds-container ds-container--content cp-section">
      <h1>Adatvédelem és analitika</h1>
      <p>A Metis kizárólag a hozzájárulásod után tölt be analitikai mérést. Hirdetési célú tárolást nem használunk, és a mérési eseményekbe nem küldünk nevet, e-mail-címet vagy szabad szöveges tartalmat.</p>
      <p>A hozzájárulásodat bármikor módosíthatod vagy visszavonhatod a „Süti beállítások” gombbal.</p>
      <aside><strong>REQUIRED_USER_INPUT:</strong> A végleges jogi tájékoztatóhoz add meg az adatkezelő pontos adatait, elérhetőségét, a megőrzési időket, az adatfeldolgozók listáját és az érintetti joggyakorlás módját.</aside>
    </main>
  );
}


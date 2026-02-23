import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-20 pt-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
          Rólam
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Adattudomány, statisztika, matematika és Python érthetően, lépésről lépésre.
        </p>
      </header>

      <section className="grid gap-10 sm:grid-cols-[180px_1fr] sm:items-start">
        <div className="sm:sticky sm:top-20">
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src="/images/balint.jpg"
              alt="Bálint portré"
              width={600}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Elérhetőség: learn.metis@gmail.com
          </p>
        </div>

        <article
          className={[
            // Inline selector typography styling (ugyanaz a módszer, mint a postoknál)
            "[&_p]:my-7 [&_p]:leading-relaxed [&_p]:text-muted-foreground",
            "[&_h2]:mt-14 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
            "[&_h3]:mt-10 [&_h3]:scroll-mt-24 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-foreground",
            "[&_a]:underline [&_a]:underline-offset-4 [&_a]:text-accent",
            "[&_ul]:my-7 [&_ul]:list-disc [&_ul]:pl-7 [&_ul>li]:my-2",
            "[&_ol]:my-7 [&_ol]:list-decimal [&_ol]:pl-7 [&_ol>li]:my-2",
            "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-5 [&_blockquote]:text-muted-foreground",
          ].join(" ")}
        >
          <h2>Bemutatkozás</h2>

          <p>
            Bálint vagyok, szociológus végzettségű adattudós, aki napi szinten dolgozik
            statisztikával, matematikával, Python-nal és nagy adathalmazokkal. Nem klasszikus matekos
            háttérből érkeztem, így saját tapasztalatból ismerem azt az utat, amelyen
            lépésről lépésre, érthetően lehet eljutni a valódi megértésig.
          </p>

          <p>
            Az elmúlt években adattudósként dolgoztam a kiskereskedelem, a légiipar és a média
            területén, ahol Python, SQL, Power BI és PySpark segítségével építettem
            skálázható elemzési és automatizációs megoldásokat. Munkám során olyan
            problémákkal foglalkoztam, mint ügyfél-lojalitás, ügyfél lemorzsolódási és megtartási-ráta elemzés,
            kampányhatékonyság vagy költségoptimalizálás, jellemzően nagyvállalati,
            Azure-alapú környezetben. Számomra az adat nem öncélú számhalmaz, hanem eszköz
            arra, hogy érthető, mérhető üzleti döntéseket támogasson.
          </p>

          <h2>Tanítás</h2>

          <blockquote>
            Hiszek abban, hogy a megértés építi a legnagyobb önbizalmat - legyen szó
            vizsgáról, beadandóról vagy egy új technológia elsajátításáról.
          </blockquote>

          <h2>Jelenleg</h2>

          <p>
            Jelenleg a gépi tanulás és a cloud engineering (AWS, Azure) területén mélyítem
            tovább a tudásomat, hosszú távú célom pedig olyan oktatóanyagok készítése amelyek
            nem csak a technikai készségek átadására, hanem az elemzői gondolkodásra is tanítanak.
          </p>

          <h2>Kapcsolódjunk</h2>

          <p>
            Ha szeretnél stresszmentesebben tanulni, karrierváltáson gondolkozol, vagy csak magabiztosabban szeretnéd érteni
            a statisztikát, a matematikát vagy a Python logikáját, szívesen segítek - lépésről lépésre.
          </p>

          <ul>
            <li>Egyetemi vizsgafelkészülés, beadandó támogatás</li>
            <li>Statisztika és valószínűségszámítás</li>
            <li>Python alapok, adatelemzés, data science workflow</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

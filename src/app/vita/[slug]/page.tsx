import { EpisodePage, episodeMetadata } from "@/components/site/EpisodePage";
import { getEpisodes } from "@/data/episodes";

export const dynamicParams = false;

export function generateStaticParams() {
  return getEpisodes("vita").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return episodeMetadata("vita", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EpisodePage section="vita" slug={slug} />;
}

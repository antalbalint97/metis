type FigureProps = {
  src?: string;
  alt?: string;
  caption?: string;
};

export function Figure({ src, alt, caption }: FigureProps) {
  if (!src) return null;

  return (
    <figure className="my-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? ""}
        className="w-full rounded-xl border border-zinc-200"
        loading="lazy"
      />
      {caption ? (
        <figcaption className="mt-3 text-sm text-zinc-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
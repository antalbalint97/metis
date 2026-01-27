type CalloutProps = {
  title?: string;
  children?: React.ReactNode;
};

export function Callout({ title, children }: CalloutProps) {
  return (
    <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
      {title ? (
        <div className="mb-2 font-medium text-zinc-900">{title}</div>
      ) : null}
      <div className="text-zinc-700">{children}</div>
    </div>
  );
}
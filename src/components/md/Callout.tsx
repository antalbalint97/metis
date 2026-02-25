type CalloutProps = {
  title?: string;
  children?: React.ReactNode;
};

export function Callout({ title, children }: CalloutProps) {
  return (
    <div className="my-8 rounded-xl border border-border bg-muted p-5">
      {title ? (
        <div className="mb-2 font-medium text-foreground">{title}</div>
      ) : null}
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

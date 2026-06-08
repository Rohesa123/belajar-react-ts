type Props = {
  kicker: string;
  title: string;
};

export default function SectionTitle({ kicker, title }: Props) {
  return (
    <div className="mb-10">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-leaf">
        <span className="h-px w-8 bg-leaf/60" />
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-fog sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

import { statFields } from "../data/profile";
import { useGithub, formatRelative } from "../github/githubContext";

const statusMeta: Record<
  string,
  { dot: string; text: string; label: (rel: string) => string }
> = {
  live: {
    dot: "bg-leaf",
    text: "text-leaf",
    label: () => "Data live dari GitHub · diperbarui baru saja",
  },
  cached: {
    dot: "bg-amber-400",
    text: "text-amber-400",
    label: (rel) => `Mode hemat (rate limit) · data terakhir ${rel}`,
  },
  loading: {
    dot: "bg-mist animate-pulse",
    text: "text-mist",
    label: () => "Mengambil data dari GitHub…",
  },
  static: {
    dot: "bg-mist",
    text: "text-mist",
    label: () => "Menampilkan data contoh",
  },
};

export default function StatsGrid() {
  const { snapshot, status } = useGithub();
  const meta = statusMeta[status];
  const isLoading = status === "loading";

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {statFields.map((f) => (
          <div
            key={f.key}
            className="glass group relative overflow-hidden rounded-2xl p-5 text-center transition hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-leaf/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div
              className={`font-display text-3xl font-bold text-gradient sm:text-4xl ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {snapshot[f.key]}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-mist">
              {f.label}
            </div>
          </div>
        ))}
      </div>

      {/* indikator sumber data */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs">
        <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
        <span className={meta.text}>
          {meta.label(formatRelative(snapshot.fetchedAt))}
        </span>
      </div>
    </section>
  );
}

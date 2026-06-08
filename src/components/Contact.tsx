import { useState, type FormEvent } from "react";
import { profile, company, WEB3FORMS_ACCESS_KEY } from "../data/profile";
import SectionTitle from "./SectionTitle";
import SocialLinks from "./SocialLinks";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const sendViaMailto = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(`Pesan dari ${name} (via web profil)`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;

    // Tanpa access key → langsung pakai mailto (buka app email pengunjung).
    if (!WEB3FORMS_ACCESS_KEY) {
      sendViaMailto(name, email, message);
      form.reset();
      return;
    }

    // Dengan access key → kirim beneran lewat Web3Forms.
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Pesan dari ${name} (web profil)`,
          from_name: name,
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Gagal mengirim");
      }
    } catch (err) {
      // Kalau layanan gagal, tawarkan jalur mailto sebagai cadangan.
      setError((err as Error).message);
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-elevated/60 px-4 py-3 text-sm text-fog placeholder:text-mist/60 outline-none transition focus:border-leaf/60 focus:ring-2 focus:ring-leaf/20";

  return (
    <section id="kontak" className="relative scroll-mt-24 py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle kicker="Kontak" title="Mari Terhubung" />

        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
          {/* kiri: info */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-mist">
              Punya proyek, pertanyaan, atau ingin berkolaborasi? Kirim pesan
              lewat form di samping, atau temukan saya di:
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                @
              </span>
              <span className="font-mono text-sm text-fog">{profile.email}</span>
            </a>

            {/* perusahaan */}
            <a
              href={company.url}
              target="_blank"
              rel="noreferrer"
              className="glass block rounded-2xl p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-wider text-mist">
                Saat ini bekerja di
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-fog">
                {company.name}{" "}
                <span className="text-leaf">· {company.role}</span>
              </p>
              <p className="mt-1 text-sm text-mist">{company.desc}</p>
            </a>

            <SocialLinks size="sm" />
          </div>

          {/* kanan: form */}
          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Nama" className={inputCls} />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Anda"
                className={inputCls}
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tulis pesan Anda…"
              className={`${inputCls} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-gradient-to-r from-lime to-mint px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-leaf/20 transition hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending" ? "Mengirim…" : "Kirim Pesan"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-leaf">
                ✓ Terima kasih! {WEB3FORMS_ACCESS_KEY ? "Pesan terkirim." : "Aplikasi email Anda akan terbuka."}
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-amber-400">
                Gagal kirim ({error}).{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  Email langsung saja
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

import { createContext, useContext } from "react";
import { profile, staticSnapshot, type LanguageStat } from "../data/profile";

export const USERNAME = profile.username;
const CACHE_KEY = `gh:${USERNAME}`;

/** Snapshot data GitHub yang kita pakai & simpan. */
export type GhSnapshot = {
  publicRepos: number;
  followers: number;
  following: number;
  createdYear: number;
  name: string;
  avatar: string;
  bio: string | null;
  location: string | null;
  languages: LanguageStat[];
  fetchedAt: number | null; // epoch ms saat data berhasil diambil
};

/**
 * loading → belum ada cache, sedang ambil pertama kali
 * live    → baru saja berhasil ambil dari GitHub
 * cached  → gagal refresh (rate limit/offline), pakai NILAI TERAKHIR dari cache
 * static  → belum pernah ada data live sama sekali, pakai angka cadangan
 */
export type GhStatus = "loading" | "live" | "cached" | "static";

export const defaultSnapshot: GhSnapshot = {
  ...staticSnapshot,
  fetchedAt: null,
};

export type GithubState = {
  snapshot: GhSnapshot;
  status: GhStatus;
};

export const GithubContext = createContext<GithubState>({
  snapshot: defaultSnapshot,
  status: "static",
});

export function useGithub(): GithubState {
  return useContext(GithubContext);
}

/** Baca snapshot terakhir dari localStorage (kalau ada & valid). */
export function readCache(): GhSnapshot | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GhSnapshot;
    if (typeof parsed.followers !== "number") return null;
    // Cache lama mungkin belum punya `languages` — isi dari cadangan.
    if (!Array.isArray(parsed.languages) || parsed.languages.length === 0) {
      parsed.languages = defaultSnapshot.languages;
    }
    return parsed;
  } catch {
    return null;
  }
}

/** Simpan snapshot terbaru ke localStorage. */
export function writeCache(snap: GhSnapshot): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(snap));
  } catch {
    /* storage penuh / diblokir — abaikan saja */
  }
}

const GH_HEADERS = { Accept: "application/vnd.github+json" };

/** Hitung distribusi bahasa (berdasarkan bahasa utama tiap repo). */
function computeLanguages(repos: { language: string | null }[]): LanguageStat[] {
  const counts = new Map<string, number>();
  for (const r of repos) {
    if (!r.language) continue;
    counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  if (total === 0) return defaultSnapshot.languages;
  return [...counts.entries()]
    .map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

/** Ambil data user + repo dari GitHub API & petakan ke GhSnapshot. */
export async function fetchGithubUser(signal?: AbortSignal): Promise<GhSnapshot> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, { headers: GH_HEADERS, signal }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
      headers: GH_HEADERS,
      signal,
    }),
  ]);
  if (!userRes.ok) throw new Error(`GitHub API ${userRes.status}`);
  const u = await userRes.json();

  // Repo opsional: kalau gagal, pakai bahasa cadangan supaya user tetap tampil.
  let languages = defaultSnapshot.languages;
  if (reposRes.ok) {
    const repos = (await reposRes.json()) as { language: string | null }[];
    languages = computeLanguages(repos);
  }

  return {
    publicRepos: u.public_repos ?? defaultSnapshot.publicRepos,
    followers: u.followers ?? defaultSnapshot.followers,
    following: u.following ?? defaultSnapshot.following,
    createdYear: u.created_at
      ? new Date(u.created_at).getFullYear()
      : defaultSnapshot.createdYear,
    name: u.name || defaultSnapshot.name,
    avatar: u.avatar_url || defaultSnapshot.avatar,
    bio: u.bio ?? null,
    location: u.location ?? defaultSnapshot.location,
    languages,
    fetchedAt: Date.now(),
  };
}

type RelStrings = {
  now: string;
  min: (n: number) => string;
  hour: (n: number) => string;
  day: (n: number) => string;
};

/** Format waktu relatif sesuai bahasa aktif, mis. "3 menit lalu" / "3m ago". */
export function formatRelative(ts: number | null, rel: RelStrings): string {
  if (!ts) return "—";
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return rel.now;
  if (min < 60) return rel.min(min);
  const hour = Math.floor(min / 60);
  if (hour < 24) return rel.hour(hour);
  return rel.day(Math.floor(hour / 24));
}

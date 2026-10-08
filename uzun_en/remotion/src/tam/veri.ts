// Tam video zaman çizelgesi (hazirla_tam.py üretir) ve sahne tipleri.
import veri from "./tam.gen.json";
import type { Parca, Sahne } from "../zaman";

export type Baslik = { satirlar: string[]; vurgu?: string; not?: string; vurgu_alt?: string };
export type Kart = { ust: string; baslik: string; alt: string };
export type Cubuk = { etiket: string; deger: number; metin: string };
export type Grafik = { baslik: string; alt: string; cubuklar: Cubuk[]; kaynak: string };
export type Meta = {
  gorsel: string | null;      // "tam/NN" -> public/img/tam/NN.jpg (Kamera gorsel=...); kart/grafik sahnelerinde null
  bolum?: string;             // bu sahneyle başlayan bölümün adı
  bolumNo?: string | null;    // "PART 1" ... "RECAP" (otomatik bölüm rozeti)
  tip?: "kart" | "grafik";
  kart?: Kart;
  grafik?: Grafik;
  baslik?: Baslik;            // proje.json'daki ekran başlığı önerisi
  etiket?: string;            // kaynak etiketi, ör. "Shukla et al. · Diabetes Care · 2015"
};
export type SahneTam = Sahne & { meta: Meta };
/** Sahne dosyasının isteğe bağlı ayarı: export const ayar = { filigran: false } gibi. */
export type SahneAyar = { filigran?: boolean; rozet?: boolean };
/** Sahne bileşenlerinin aldığı props: t = sahne içi saniye (0 = sahnenin ilk sesi), s = sahne. */
export type SP = { t: number; s: SahneTam };

export type KapakVeri = { satirlar: string[]; vurgu?: string | null; vurgu_alt?: string | null; gorsel: string | null };
export const TAM = veri as unknown as {
  fps: number; toplam: number; gecis: number; slug: string; sahneler: SahneTam[]; altyazi: Parca[]; kapak: KapakVeri;
};
export const sahneBul = (id: number) => TAM.sahneler.find((s) => s.id === id)!;

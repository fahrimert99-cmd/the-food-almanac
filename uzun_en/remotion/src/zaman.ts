// Zaman tipleri ve yardımcılar. Tüm süreler saniye.
export type Cumle = { bas: number; sure: number; metin: string; nokta: [number, number][] };
export type Sahne = { id: number; bas: number; sure: number; cumleler: Cumle[] };
export type Parca = { t0: number; t1: number; kelimeler: { w: string; t: number }[] };

export const kis = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const ilerle = (t: number, bas: number, sure: number) => kis((t - bas) / sure);
export const eout = (p: number) => 1 - Math.pow(1 - p, 3);
export const einout = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
export const eback = (p: number) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return p <= 0 ? 0 : 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
};
/** Beliren öğe: [ölçek, opaklık] (hafif geri yaylanma). */
export const pop = (t: number, bas: number, sure = 0.55): [number, number] => {
  const p = ilerle(t, bas, sure);
  return [p <= 0 ? 0 : 0.55 + 0.45 * eback(p), eout(kis(p * 1.6))];
};
/** Kaybolan öğe: bitis anından itibaren sure içinde 1 -> 0. */
export const sol = (t: number, bitis: number, sure = 0.4) => 1 - eout(ilerle(t, bitis, sure));

const karakterAni = (nokta: [number, number][], i: number) => {
  for (let j = 0; j < nokta.length - 1; j++) {
    const [c0, t0] = nokta[j], [c1, t1] = nokta[j + 1];
    if (c0 <= i && i <= c1) return t0 + (t1 - t0) * ((i - c0) / Math.max(1, c1 - c0));
  }
  return nokta[nokta.length - 1][1];
};

/** K(cümle_no, ifade) -> ifadenin söylendiği an (sahne içi sn); hazirla.py zaman çizelgesiyle aynı. */
export const kelimeZamani = (s: Sahne) => (k: number, ifade: string) => {
  const sira = [k, ...s.cumleler.map((_, j) => j).filter((j) => j !== k)];
  for (const j of sira) {
    const c = s.cumleler[j];
    if (!c) continue;
    const i = c.metin.toLowerCase().indexOf(ifade.toLowerCase());
    if (i >= 0) return c.bas + karakterAni(c.nokta, i);
  }
  console.warn(`ifade bulunamadı: sahne ${s.id} "${ifade}"`);
  return s.cumleler[0].bas;
};

export const RENK = {
  kagit: "#F6F3EC", kagitAcik: "#FBF8F1", murekkep: "#302822", koyuYesil: "#1F4A2C", altin: "#B8862B",
  altinAcik: "#E2B04A", lacivert: "#1B2A41", mercan: "#CC5842", yesil: "#568A46", gri: "#6E6E78",
};

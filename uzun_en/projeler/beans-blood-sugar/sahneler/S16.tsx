import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// yazı zeminli hap (karışık görsel üstünde okunurluk)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; hiza?: "orta" | "sag" }> = ({ t, bas, bitis = 1e9, metin, x, y, hiza = "orta" }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", top: y, ...(hiza === "orta" ? { left: x, transform: "translateX(-50%)" } : { right: 1920 - x }), opacity: a,
    background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 28px", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: 1.5, whiteSpace: "nowrap" }}>{metin}</div>;
};

// Dürüst okuma: tabak üzerinde iki katkı
const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  const b2 = K(1, "eating better"), b3 = K(2, "beans");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={pencere}>
        <Etiket t={t} bas={b2} bitis={b3 - 0.1} capa={[560, 330]} konum={[200, 170]} metin="GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={b2 + 0.4} bitis={b3 - 0.1} capa={[1220, 380]} konum={[1210, 100]} metin="BROWN RICE" renk={RENK.yesil} />
        <Etiket t={t} bas={b3} capa={[950, 650]} konum={[300, 880]} metin="BEANS: A MODEST EXTRA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "honest")} bitis={K(1, "Part") - 0.1} metin="THE HONEST" x={120} y={140} boyut={96} renk={RENK.lacivert} style={{ textShadow: `0 0 14px ${kagit(1)}` }} />
      <Baslik t={t} bas={K(0, "reading") } bitis={K(1, "Part") - 0.1} metin="READING" x={120} y={250} boyut={96} renk={RENK.koyuYesil} style={{ textShadow: `0 0 14px ${kagit(1)}` }} />
      <Pil t={t} bas={K(1, "Part")} bitis={b3 - 0.1} x={1700} y={890} hiza="sag" metin="PART: EATING BETTER OVERALL" />
      <Pil t={t} bas={K(3, "headlines")} x={960} y={890} metin="HEADLINES TEND TO SKIP IT" />
    </>
  );
};
export default S16;

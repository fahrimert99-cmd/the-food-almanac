import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// 19 çalışma: kaselerin üstünde sırayla halkalar; sonra "değişkenlik" notu
// yazı zeminli hap (karışık görsel üstünde okunurluk)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; hiza?: "orta" | "sag" }> = ({ t, bas, bitis = 1e9, metin, x, y, hiza = "orta" }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", top: y, ...(hiza === "orta" ? { left: x, transform: "translateX(-50%)" } : { right: 1920 - x }), opacity: a,
    background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 28px", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: 1.5, whiteSpace: "nowrap" }}>{metin}</div>;
};

const MERK: [number, number][] = [
  [263, 315], [504, 315], [736, 315], [971, 315], [1213, 315], [1453, 315], [1683, 315],
  [263, 551], [504, 551], [736, 551], [963, 551], [1191, 551], [1420, 551], [1671, 551],
  [263, 787], [500, 787], [729, 787], [965, 787], [1207, 787],
];
const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const b19 = K(0, "19"), b2 = K(1, "results");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={pencere}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {MERK.map(([x, y], i) => {
            const [sc, al] = pop(t, b19 + i * 0.06, 0.4);
            if (al <= 0) return null;
            return <ellipse key={i} cx={x} cy={y} rx={112 * sc} ry={106 * sc} fill="none" stroke={RENK.koyuYesil} strokeWidth={6}
              strokeDasharray="14 8" opacity={al * 0.95} />;
          })}
        </svg>
      </Kamera>
      <Baslik t={t} bas={K(0, "pulses")} bitis={K(0, "A1C") - 0.1} metin="PULSES IN A LOW-GI DIET" x={960} y={70} boyut={58} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "A1C")} bitis={b19 - 0.1} metin="A1C FELL TOO" x={960} y={70} boyut={58} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={b19} bitis={b2 - 0.2} metin="ACROSS 19 TRIALS" x={960} y={70} boyut={58} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={b2} metin="RESULTS VARIED A LOT" x={960} y={70} boyut={58} renk={RENK.mercan} hiza="orta" />
      <Pil t={t} bas={K(1, "trial to trial")} x={960} y={898} metin="FROM TRIAL TO TRIAL" />
    </>
  );
};
export default S21;

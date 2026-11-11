// Sahne 46 — porsiyon: 1/4 bardak ≈ 1 ons, yarım bardak aralığın ucu. Kaplardaki sahte yazılar etiket plakalarıyla örtülü.
import React from "react";
import { ANTON, Baslik, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Metin hapı: ikonlu, kâğıt zeminli
const Chip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon: "onay" | "carpi" | "soru" | "ok"; boyut?: number; sag?: boolean }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 34, sag }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.4;
  return (
    <div style={{ position: "absolute", top: y, ...(sag ? { right: 1920 - x } : { left: x }), opacity: a, transform: `scale(${sc})`,
      transformOrigin: sag ? "100% 50%" : "0% 50%", display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
      background: "#FBF8F1", border: `3px solid ${renk}`, borderRadius: 999, padding: `8px ${boyut * 0.8}px 8px 10px`,
      fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={d * 0.6} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

// Kap üzerindeki bozuk yazıyı örten plaka; yazı ilgili kelimede belirir
const Plaka: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const a = eout(ilerle(t, bas, 0.45));
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - 125, top: y - 135, width: 250, height: 270, background: "#FBF8F1", border: `4px solid ${RENK.lacivert}`,
      borderRadius: 22, boxShadow: "0 8px 20px rgba(48,40,34,0.22)", display: "flex", alignItems: "center", justifyContent: "center",
      transform: `scale(${bas < 0 ? 1 : 1})` }}>
      {al <= 0 && [0, 1, 2, 3].map((i) => (
        <div key={i} style={{ position: "absolute", left: 40, top: 60 + i * 52, width: i % 2 ? 90 : 150, height: 5, background: RENK.lacivert, opacity: 0.28, borderRadius: 3 }} />
      ))}
      {al > 0 && (
        <div style={{ transform: `scale(${sc})`, opacity: al, textAlign: "center", fontFamily: ANTON, fontSize: 84, lineHeight: 1.05, color: renk }}>
          {metin.split(" ").map((m, i) => <div key={i}>{m}</div>)}
        </div>
      )}
      <div style={{ position: "absolute", inset: 0, opacity: 0 * a }} />
    </div>
  );
};

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gA = K(3, "A") - 0.15;
  const gB = K(3, "small") - 0.15;
  const [sb, ab] = pop(t, K(0, "One."), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Plaka t={t} bas={K(3, "cup")} x={640} y={600} metin="1/4 CUP" renk={RENK.koyuYesil} />
        <Plaka t={t} bas={K(3, "half")} x={1195} y={590} metin="1/2 CUP" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 58, width: 84, height: 84, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56, transform: `scale(${sb})`, opacity: ab }}>1</div>
      <Baslik t={t} bas={K(1, "portion.")} metin="THE PORTION" x={170} y={100} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "one")} bitis={gA} metin="1–2 OUNCES" x={1860} y={300} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "day.")} bitis={gA} metin="a day, in the trial" x={1860} y={365} hiza="sag" boyut={36} />
      <Baslik t={t} bas={K(3, "quarter")} bitis={gB} metin="1/4 CUP" x={1860} y={300} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "one")} bitis={gB} metin="≈ 1 OUNCE" x={1860} y={410} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(3, "small")} metin="SMALL" x={1860} y={290} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "handful")} metin="HANDFUL" x={1860} y={385} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(3, "up to")} metin="up to about half a cup" x={1860} y={450} hiza="sag" boyut={36} />
      <Chip t={t} bas={K(3, "covers")} x={560} y={870} metin="COVERS 1–2 OUNCES A DAY" renk={RENK.yesil} ikon="onay" boyut={34} />
    </>
  );
};

export default S46;

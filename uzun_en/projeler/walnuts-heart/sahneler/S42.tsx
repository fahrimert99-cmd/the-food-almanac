// Sahne 42 — koşullar: az doymuş yağ, kalori artışı yok; ceviz takas olarak.
import React from "react";
import { Baslik, Etiket, IkonYol, Ikon, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "That") - 0.2;
  const pPanel = eout(ilerle(t, 0, 0.5)) * sol(t, gec);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "saturated")} bitis={gec} capa={[1373, 507]} konum={[1580, 300]} metin="SATURATED FAT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "walnuts")} capa={[867, 440]} konum={[867, 190]} metin="WALNUTS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={800} />
      <Baslik t={t} bas={K(0, "conditions:")} bitis={gec} metin="TWO" x={60} y={160} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "conditions:") + 0.15} bitis={gec} metin="CONDITIONS" x={60} y={265} boyut={96} renk={RENK.koyuYesil} />
      <Chip t={t} bas={K(0, "low")} bitis={gec} x={60} y={400} metin="LOW SATURATED FAT" renk={RENK.yesil} ikon="onay" boyut={32} />
      <Chip t={t} bas={K(0, "increase") - 0.3} bitis={gec} x={60} y={490} metin="NO INCREASE IN CALORIES" renk={RENK.yesil} ikon="onay" boyut={32} />
      <Baslik t={t} bas={K(1, "swap,")} metin="A SWAP," x={1860} y={170} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT A BONUS" x={1860} y={282} boyut={100} hiza="sag" renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "bonus")} ad="carpi" x={1460} y={640} zemin={RENK.mercan} />
    </>
  );
};

export default S42;

// Sahne 46 — Adım 1: yapraklı yeşillikler. Tava, dondurulmuş poşet, collard demeti.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const [sc, al] = pop(t, 0.05, 0.55);
  const tF = K(3, "Frozen");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1780])} />
      <div style={{ position: "absolute", left: 1730, top: 130, width: 110, height: 110, borderRadius: "50%", background: RENK.yesil,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76,
        transform: `scale(${sc})`, opacity: al, border: "4px solid #FCF8EC", boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>1</div>
      <Baslik t={t} bas={K(1, "leafy")} metin={b.satirlar[0]} x={1860} y={310} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tF} metin={(b.not ?? "").toUpperCase()} x={1860} y={370} hiza="sag" genislik={600} boyut={40} agirlik={800} />
      <Etiket t={t} bas={K(2, "Spinach")} capa={[330, 330]} konum={[330, 95]} metin="SPINACH" renk={RENK.yesil} />
      <Etiket t={t} bas={K(2, "collard")} capa={[1030, 480]} konum={[1480, 560]} metin="COLLARD GREENS" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tF} capa={[800, 720]} konum={[1420, 800]} metin="FROZEN COUNTS" renk={RENK.altin} />
    </>
  );
};

export default S46;

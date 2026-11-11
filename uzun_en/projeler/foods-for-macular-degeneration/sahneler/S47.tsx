// Sahne 47 — Adım 2: biraz yağ ekleyin. Zeytinyağı, sote ıspanak, yumurta.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.55);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])} />
      <div style={{ position: "absolute", left: 1730, top: 110, width: 110, height: 110, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76,
        transform: `scale(${sc})`, opacity: al, border: "4px solid #FCF8EC", boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>2</div>
      <BaslikBlok t={t} bas={K(1, "little")} satirlar={["ADD A LITTLE", "FAT"]} x={1860} y={272} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} />
      <Etiket t={t} bas={K(2, "sauté")} capa={[700, 640]} konum={[300, 420]} metin="SAUTÉED GREENS" renk={RENK.yesil} />
      <Etiket t={t} bas={K(2, "olive")} capa={[870, 330]} konum={[480, 250]} metin="OLIVE OIL" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "egg")} capa={[1400, 700]} konum={[1600, 850]} metin="EGG ALONGSIDE" renk={RENK.altin} />
      <Not t={t} bas={K(3, "Researchers")} metin="Researchers suspect fat helps absorption" x={1860} y={448} hiza="sag" genislik={760} boyut={34} />
    </>
  );
};

export default S47;

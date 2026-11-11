// Sahne 25 — Bondonno: nitrat üç kat arttı ama ev ve 24 saatlik tansiyonda fark yok.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1790]);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={p}>
        <Etiket t={t} bas={K(0, "juice")} bitis={c[1].bas - 0.2} capa={[1450, 560]} konum={[1130, 400]} metin="BEET JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "home")} capa={[1700, 770]} konum={[1500, 400]} metin="HOME MONITOR" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "threefold")} bitis={c[1].bas - 0.2} vurgu="≈ 3×" not="NITRATE LEVELS ROSE" x={620} y={430} genislik={400} />
      <Hap metin="24-HOUR READINGS" renk={RENK.lacivert} style={{ position: "absolute", left: 80, top: 410, transformOrigin: "0 50%",
        transform: `scale(${pop(t, K(1, "twenty-four"), 0.45)[0]})`, opacity: pop(t, K(1, "twenty-four"), 0.45)[1] }} />
      <BaslikBlok t={t} bas={K(1, "difference") - 0.4} satirlar={["NO", "DIFFERENCE"]} x={80} y={140} boyut={118}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "placebo")} metin="VS PLACEBO" x={84} y={510} boyut={38} renk={RENK.gri} agirlik={800} />
    </>
  );
};

export default S25;

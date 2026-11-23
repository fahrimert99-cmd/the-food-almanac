// Sahne 4 — pazar tezgâhı; boş tabelaya kanal adı yazılır, iddia ve adil test etiketleri.
import React from "react";
import { Etiket, Kamera, MARKA, ANTON, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, K(0, "Food"), 0.5));
  return (
    <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [120, 60, 1700])}>
      {/* boş tabelaya kanal adı */}
      <div style={{ position: "absolute", left: 1140, top: 700, width: 290, height: 250, opacity: a, display: "flex",
        flexDirection: "column", alignItems: "center", justifyContent: "center", transform: "skewX(8deg) rotate(-1deg)",
        fontFamily: ANTON, fontSize: 58, lineHeight: 1.1, color: RENK.lacivert, textAlign: "center" }}>
        <span>THE FOOD</span><span style={{ color: RENK.koyuYesil }}>ALMANAC</span>
      </div>
      <Etiket t={t} bas={K(1, "claim")} capa={[780, 560]} konum={[520, 400]} metin="THE CLAIM" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "test it fairly")} capa={[1280, 520]} konum={[1570, 400]} metin="TEST IT FAIRLY" renk={RENK.yesil} />
    </Kamera>
  );
};

export default S04;

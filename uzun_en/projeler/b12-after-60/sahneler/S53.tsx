// Sahne 53 — Metformin, PPI, H2 blokerler: bağlantı, durdurma nedeni değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisEski = K(1, "These") - 0.2;
  return (
    <>
      {/* pencere sağ alttaki sahte yılı (y > 895) dışarıda bırakır */}
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [100, 0, 1500], [150, 10, 1420])}>
        <Etiket t={t} bas={K(0, "metformin")} bitis={bitisEski} capa={[655, 640]} konum={[330, 430]} metin="METFORMIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "PPIs")} bitis={bitisEski} capa={[850, 560]} konum={[780, 270]} metin="PPIs" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "H2")} bitis={bitisEski} capa={[1380, 700]} konum={[1370, 470]} metin="H2 BLOCKERS" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 210,
        background: `linear-gradient(to bottom, ${kagit(0.85)} 0%, ${kagit(0.7)} 60%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "linked")} bitis={bitisEski} metin="LINKED TO LOWER B12" x={960} y={110} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "links")} metin="STUDY LINKS" x={960} y={110} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(1, "not reasons")} metin="NOT A REASON TO STOP" x={960} y={210} boyut={60} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S53;

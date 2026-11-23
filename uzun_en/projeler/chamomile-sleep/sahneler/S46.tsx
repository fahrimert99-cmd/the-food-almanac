// Sahne 46 — NIH uyarısı: sakinleştiriciler, hamilelik/emzirme, doktora danış.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, kagit } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCham = K(0, "chamomile"), tSed = K(0, "sedatives,"), tPreg = K(0, "pregnancy");
  const tDoc = K(1, "Mention"), tDoc2 = K(1, "doctor");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740]);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kam} />
      {/* sol üst: yazılar için hafif kâğıt zemin */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1100, height: 380,
        background: `linear-gradient(to bottom, ${kagit(0.9)} 0%, ${kagit(0.9)} 70%, ${kagit(0)} 100%)` }} />
      <Etiket t={t} bas={tCham} bitis={tSed - 0.2} capa={[1330, 370]} konum={[1580, 190]} metin="CHAMOMILE TEA" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tSed} bitis={tPreg - 0.3} metin="SEDATIVES" x={140} y={130} boyut={100} renk={RENK.mercan} />
      <Not t={t} bas={tSed + 0.3} bitis={tPreg - 0.3} metin="Might interact — NIH" x={146} y={205} boyut={34} />
      <Baslik t={t} bas={tPreg} bitis={tDoc - 0.3} metin="PREGNANCY &" x={140} y={120} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPreg + 0.2} bitis={tDoc - 0.3} metin="BREASTFEEDING" x={140} y={210} boyut={80} renk={RENK.mercan} />
      <Not t={t} bas={tPreg + 0.5} bitis={tDoc - 0.3} metin="Little is known about safety" x={146} y={266} boyut={34} />
      <Baslik t={t} bas={tDoc} metin="MENTION IT TO" x={140} y={120} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDoc + 0.2} metin="YOUR DOCTOR" x={140} y={210} boyut={80} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tDoc2} capa={[1420, 700]} konum={[1560, 860]} metin="IF EITHER APPLIES" renk={RENK.altin} />
    </>
  );
};

export default S46;

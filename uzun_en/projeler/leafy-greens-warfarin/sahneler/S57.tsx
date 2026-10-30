// Sahne 57 — Tek güncel liste: kâğıt, takviyeler, yağ şişesi; eczacı kontrolü.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(0, "list"), tSup = K(0, "supplements"), tOil = K(0, "oils"), tVisit = K(0, "bring it");
  const tEczaci = K(1, "pharmacist"), tYeni = K(1, "each new item");
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [120, 90, 1680])}>
        <Etiket t={t} bas={tListe} bitis={tVisit} capa={[800, 660]} konum={[520, 340]} metin="ONE UPDATED LIST" renk={RENK.yesil} boyut={30} />
        <Etiket t={t} bas={tSup} bitis={tVisit} capa={[1090, 480]} konum={[1090, 170]} metin="SUPPLEMENTS" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tOil} bitis={tVisit} capa={[1380, 560]} konum={[1690, 400]} metin="OILS" renk={RENK.altin} boyut={30} />
      </Kamera>
      <Baslik t={t} bas={tVisit} bitis={tEczaci - 0.2} metin="BRING IT TO EVERY VISIT" x={80} y={130} boyut={80} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tEczaci} metin="PHARMACIST" x={80} y={130} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tYeni} metin="checks each new item for interactions" x={84} y={210} boyut={36} agirlik={700} />
    </>
  );
};

export default S57;

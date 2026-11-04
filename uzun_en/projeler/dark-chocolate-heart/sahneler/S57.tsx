// Sahne 57 — çikolata ilaç değil; küçük, seçilmiş bir kare.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(0, "not"), tSq = K(1, "small square"), tWell = K(1, "well chosen"), tCalm = K(1, "calm");
  const pArka = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [20, 40, 1840], [80, 80, 1720])} />
      {/* başlık arkası yumuşak kâğıt zemin */}
      <div style={{ position: "absolute", left: 1000, top: 20, width: 920, height: 360, opacity: pArka,
        background: `radial-gradient(ellipse 50% 50% at 55% 50%, ${kagit(0.96)} 0%, ${kagit(0.92)} 60%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tNot} metin="NOT A HEART" x={1800} y={140} boyut={92} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={tNot + 0.2} metin="MEDICINE" x={1800} y={250} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Etiket t={t} bas={tSq} capa={[780, 700]} konum={[330, 540]} metin="SMALL SQUARE" renk={RENK.altin} />
      <Etiket t={t} bas={tWell} capa={[500, 840]} konum={[330, 900]} metin="WELL CHOSEN" renk={RENK.yesil} />
      <Not t={t} bas={tCalm} metin="a calm, varied way of eating" x={1860} y={820} hiza="sag" genislik={560} boyut={40} agirlik={700} />
    </>
  );
};

export default S57;

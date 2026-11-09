// Sahne 57 — restoranda: sos yanda, yarısı eve, en tuzlu porsiyon paneli
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSauce = K(1, "sauces"), tHalf = K(1, "half your meal");
  const tNat = K(2, "national data"), tRest = K(2, "restaurant food"), tSalt = K(2, "saltiest"), tCal = K(2, "per calorie");
  const pPanel = eout(ilerle(t, tNat - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={tSauce} bitis={tHalf - 0.2} capa={[1020, 680]} konum={[1020, 880]} metin="SAUCE ON THE SIDE" renk={RENK.mercan} />
        <Etiket t={t} bas={tHalf} capa={[1373, 440]} konum={[1290, 180]} metin="TAKE HALF HOME" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={640} />
      <Not t={t} bas={tNat} metin="IN THE NATIONAL DATA" x={60} y={250} boyut={30} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={tRest} metin="RESTAURANT FOOD" x={60} y={370} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSalt} metin="SALTIEST" x={60} y={480} boyut={120} renk={RENK.mercan} />
      <Baslik t={t} bas={tCal} metin="PER CALORIE" x={60} y={590} boyut={64} renk={RENK.lacivert} />
    </>
  );
};

export default S57;

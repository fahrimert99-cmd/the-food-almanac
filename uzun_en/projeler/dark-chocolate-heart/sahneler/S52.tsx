// Sahne 52 — kalori ve şeker hatırlatması
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCal = K(0, "calories"), tBar = K(0, "chocolate"), tSug = K(1, "sugar in");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tBar} bitis={tSug - 0.1} capa={[780, 560]} konum={[640, 330]} metin="DARK CHOCOLATE" renk={RENK.altin} />
        <Etiket t={t} bas={tSug} capa={[1260, 520]} konum={[1640, 400]} metin="SUGAR" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tCal - 0.3} satirlar={["STILL ADDS", "CALORIES"]} x={1250} y={120} boyut={96} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} bitis={tSug - 0.1} />
      <BaslikBlok t={t} bas={tSug} satirlar={["THE SUGAR", "COUNTS TOO"]} x={1250} y={120} boyut={96} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S52;

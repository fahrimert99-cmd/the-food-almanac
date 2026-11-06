// Sahne 4 — kanal tanıtımı + sloganın kaynağına geçiş.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";
import { ilerle, eout } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cizgi = eout(ilerle(t, K(0, "Food"), 0.7));
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1840], [70, 30, 1700])}>
        <Etiket t={t} bas={K(1, "came")} capa={[800, 780]} konum={[640, 540]} metin="BREAKFAST" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "The")} metin="THE FOOD" x={90} y={180} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Food")} metin="ALMANAC" x={90} y={290} boyut={100} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 94, top: 360, height: 6, width: 300 * cizgi, background: RENK.altin }} />
      <Baslik t={t} bas={K(1, "slogan")} metin="THE FAMOUS SLOGAN" x={90} y={440} boyut={46} renk={RENK.mercan} />
    </>
  );
};

export default S04;

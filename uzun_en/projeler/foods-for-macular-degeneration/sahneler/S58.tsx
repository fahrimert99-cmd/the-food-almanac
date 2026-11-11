// Sahne 58 — lutein/zeaksantin ve ~%40 daha düşük risk; ilişki, kanıt değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLutein = K(0, "lutein");
  const tZea = K(0, "zeaxanthin");
  const t40 = K(0, "40");
  const tMac = K(0, "macular");
  const tAsoc = K(1, "association,");
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [60, 20, 1860], [160, 70, 1650])}>
        <Etiket t={t} bas={tLutein} bitis={tAsoc - 0.2} capa={[880, 250]} konum={[690, 125]} metin="LUTEIN" renk={RENK.yesil} />
        <Etiket t={t} bas={tZea} bitis={tAsoc - 0.2} capa={[880, 530]} konum={[300, 790]} metin="ZEAXANTHIN" renk={RENK.altin} />
        <Etiket t={t} bas={tMac} bitis={tAsoc - 0.2} capa={[1300, 190]} konum={[1420, 360]} metin="MACULAR DEGENERATION" renk={RENK.mercan} boyut={22} />
      </Kamera>
      <VurguRozet t={t} bas={t40} vurgu="–40%" not="advanced macular degeneration risk" x={270} y={140} genislik={420} bitis={tAsoc - 0.2} />
      <Panel a={eout(ilerle(t, tAsoc - 0.1, 0.5))} taraf="sol" genislik={640} />
      <BaslikBlok t={t} bas={tAsoc} satirlar={["ASSOCIATION,", "NOT PROOF"]} x={90} y={150} boyut={86} />
    </>
  );
};
export default S58;

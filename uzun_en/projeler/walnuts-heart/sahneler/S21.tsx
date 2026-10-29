// Sahne 21 — başlangıç LDL ortalaması.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLdl = K(0, "LDL"), tSay = K(0, "117"), tNot = K(1, "not");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <AltSis a={0.5} />
      <Etiket t={t} bas={tLdl} capa={[540, 560]} konum={[300, 380]} metin="LDL CHOLESTEROL" renk={RENK.altin} />
      <VurguRozet t={t} bas={tSay} vurgu="117" not="MG/DL, AVERAGE START" x={1300} y={56} genislik={420} />
      <BaslikBlok t={t} bas={tNot} satirlar={["NOT VERY HIGH"]} x={140} y={150} boyut={90} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tNot + 0.5} metin="on average" x={142} y={214} boyut={34} />
    </>
  );
};
export default S21;

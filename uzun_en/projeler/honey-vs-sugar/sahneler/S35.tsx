// Sahne 35 — "ipucu, kanıt değil"; bal çok şeker.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIpucu = K(0, "hint"), tCok = K(1, "lot of sugar");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [100, 50, 1720])}>
        <Etiket t={t} bas={tCok} capa={[1560, 640]} konum={[1380, 250]} metin="A LOT OF SUGAR" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tIpucu - 0.4} satirlar={["A HINT,", "NOT PROOF"]} x={110} y={120} boyut={88} hiza="sol"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S35;

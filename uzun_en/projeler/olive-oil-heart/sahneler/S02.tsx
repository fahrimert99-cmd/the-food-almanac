import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 2 — çekilen çalışma: açık defter üzerinde damga ve büyüteç.
const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(0, "withdrawn");
  const p = eout(ilerle(t, tW, 0.35));
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(0, "study")} bitis={tW + 0.1} capa={[620, 300]} konum={[620, 105]} metin="THE STUDY" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "details")} capa={[1100, 560]} konum={[1560, 700]} metin="THE DETAILS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transform: `rotate(-6deg) scale(${0.9 + 0.1 * p})`, transformOrigin: "640px 520px", opacity: p }}>
        <div style={{ position: "absolute", left: 340, top: 440, width: 600, height: 150, border: `8px solid ${RENK.mercan}`, borderRadius: 14, background: kagit(0.85) }} />
        <Baslik t={t} bas={tW} metin="WITHDRAWN" x={640} y={520} boyut={110} renk={RENK.mercan} hiza="orta" />
      </div>
    </>
  );
};
export default S02;

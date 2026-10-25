// Sahne 28 — kanıt kesinliği (orta–çok düşük), temkinli öneri ve finansman bağı.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, eout, ilerle, kelimeZamani, sol } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAkis = K(0, "moderate");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(0, "certainty")} bitis={3.8} capa={[880, 440]} konum={[880, 90]} metin="CERTAINTY OF EVIDENCE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "cautious")} bitis={8.0} capa={[1560, 440]} konum={[1500, 860]} metin="CAUTIOUS RECOMMENDATION" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "linked")} bitis={12.2} capa={[330, 440]} konum={[330, 790]} metin="LINKED TO THE MAKER" renk={RENK.mercan} />
      </Kamera>
      <div style={{ opacity: sol(t, 6.2) }}>
        <AdimAkisi t={t} x={960} y={90} boyut={30} numarali={false} adimlar={[
          { bas: tAkis, metin: "MODERATE", renk: RENK.altin },
          { bas: K(0, "very"), metin: "VERY LOW", renk: RENK.mercan },
        ]} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 95, width: 460, height: 112, transform: "translate(-50%, -50%)",
        opacity: eout(ilerle(t, K(1, "knowing") - 0.2, 0.4)), background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`,
        borderRadius: 24, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }} />
      <Baslik t={t} bas={K(1, "knowing") - 0.1} metin="WHO PAID?" x={960} y={95} boyut={90} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S28;

// Sahne 44 — doktor masası: başlık solda üstte, ikinci cümlede nesnelere etiketler.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTheo = K(0, "theoretical"), tNot = K(0, "not something"), tDoc = K(1, "doctor"), tHab = K(1, "daily habit");
  const tMed = K(1, "these medicines");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [100, 70, 1720])}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1530, top: 925, width: 200, height: 70,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(248,244,215) 0%, rgb(248,244,215) 60%, rgba(248,244,215,0) 100%)" }} />
        <Etiket t={t} bas={tDoc - 0.1} capa={[950, 620]} konum={[1100, 330]} metin="DOCTOR OR PHARMACIST" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={tHab - 0.1} capa={[520, 620]} konum={[790, 250]} metin="DAILY HABIT" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tMed - 0.1} capa={[300, 690]} konum={[330, 480]} metin="THESE MEDICINES" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <BaslikBlok t={t} bas={tTheo} bitis={tDoc - 0.3} satirlar={["THEORETICAL", "PRECAUTION"]} x={140} y={100} boyut={92}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 140, top: 262, opacity: eout(ilerle(t, tNot, 0.4)) * (t < tDoc - 0.3 ? 1 : 0) }}>
        <Hap metin="NOT SHOWN IN TRIALS" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S44;

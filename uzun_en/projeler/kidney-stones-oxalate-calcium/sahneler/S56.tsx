// Sahne 56 — adım 3: kalsiyum takviyesi, doktor/eczacıya sor, öğünle birlikte olabilir.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThree = K(0, "three"), tSup = K(1, "calcium supplement"), tAsk = K(1, "ask your"), tRes = K(2, "researchers"), tMeal = K(2, "with a meal"), tMay = K(2, "may matter");
  const [sc, al] = pop(t, tThree, 0.5);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tSup} bitis={tAsk - 0.2} capa={[680, 640]} konum={[1010, 310]} metin="CALCIUM SUPPLEMENT" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tMeal} capa={[1250, 640]} konum={[1130, 330]} metin="WITH A MEAL" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <div style={{ position: "absolute", left: 760, top: 110, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 62, transform: `scale(${sc})`,
        opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>3</div>
      <BaslikBlok t={t} bas={tAsk} bitis={tRes - 0.1} satirlar={["ASK YOUR DOCTOR", "OR PHARMACIST"]} x={940} y={200} boyut={64} />
      <Baslik t={t} bas={tRes} metin="RESEARCHERS SUSPECT" x={940} y={130} boyut={30} renk={RENK.altin} font="inter" aralik={4} />
      <Baslik t={t} bas={tMay} metin="MAY MATTER" x={940} y={210} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};
export default S56;

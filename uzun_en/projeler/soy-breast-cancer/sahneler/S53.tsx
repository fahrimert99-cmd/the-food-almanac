// Sahne 53 — İPUCU 1: önce yemek. Tava solda; sağda soya yiyecekleri listesi.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760]);
  const b = s.meta.baslik?.satirlar ?? ["FOOD", "FIRST"];
  const tM = K(2, "meat or dairy");
  const [sc, al] = pop(t, tM, 0.55);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={p}>
        <Etiket t={t} bas={K(2, "soy foods")} capa={[560, 560]} konum={[330, 930]} metin="SOY FOODS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "food first") - 0.4} satirlar={b} x={70} y={95} boyut={100} renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.3} />
      <Liste t={t} x={1290} y={470} aralik={76} boyut={36} isaret="onay" genislik={560} ogeler={[
        { bas: K(2, "tofu"), metin: "TOFU" },
        { bas: K(2, "tempeh"), metin: "TEMPEH" },
        { bas: K(2, "edamame"), metin: "EDAMAME" },
        { bas: K(2, "soy milk"), metin: "SOY MILK" },
        { bas: K(2, "miso"), metin: "MISO" },
      ]} />
      <div style={{ position: "absolute", left: 1230, top: 880, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 24px", fontFamily: INTER,
        fontWeight: 800, fontSize: 25, letterSpacing: 1, color: RENK.murekkep, whiteSpace: "nowrap" }}>STANDS IN FOR SOME MEAT OR DAIRY</div>
    </>
  );
};

export default S53;

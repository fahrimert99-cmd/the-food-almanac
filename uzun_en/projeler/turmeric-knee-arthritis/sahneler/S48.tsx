// Sahne 48 — Madde 2: etiketi oku. Solda kavanoz + toz, sağ üstte onay listesi; sonda "kök tozu" uyarısı.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 40, 1650], [30, 60, 1580]);
  const tTwo = K(0, "two");
  const tRead = K(1, "read");
  const tExt = K(2, "extracts");
  const tDose = K(2, "stated");
  const tCur = K(2, "curcuminoid");
  const tRoot = K(3, "turmeric root powder");
  const tNot = K(3, "not what was tested");
  const [sb, ab] = pop(t, tTwo, 0.55);
  const [sn, an] = pop(t, tNot, 0.55);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={pen}>
        <Etiket t={t} bas={tCur} bitis={8.9} capa={[440, 430]} konum={[900, 300]} metin="CURCUMINOID AMOUNT" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tRoot} capa={[620, 600]} konum={[910, 430]} metin="ROOT POWDER ONLY" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 90, width: 120, height: 120, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 84, opacity: ab, transform: `scale(${sb})`,
        border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 10px 24px rgba(48,40,34,0.22)" }}>2</div>
      <BaslikBlok t={t} bas={tRead} satirlar={["READ THE", "LABEL"]} x={1860} y={150} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} isaret="onay" x={1060} y={400} aralik={84} boyut={34} genislik={820}
        ogeler={[{ bas: tExt - 0.1, metin: "SPECIFIC EXTRACTS", bitis: 8.9 }, { bas: tDose - 0.1, metin: "STATED DOSES", bitis: 8.9 },
          { bas: tCur - 0.1, metin: "CURCUMINOID AMOUNT LISTED", bitis: 8.9 }]} />
      <div style={{ position: "absolute", left: 1860, top: 540, transform: `translateX(-100%) scale(${sn})`, transformOrigin: "100% 50%", opacity: an }}>
        <Hap metin="NOT WHAT WAS TESTED" renk={RENK.mercan} boyut={40} />
      </div>
    </>
  );
};

export default S48;

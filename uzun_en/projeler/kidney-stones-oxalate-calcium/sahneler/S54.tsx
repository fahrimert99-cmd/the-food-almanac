// Sahne 54 — adım 1: kalsiyumlu yiyecekleri kendi kendine kesme.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "one"), tCut = K(1, "cut calcium"), tDairy = K(2, "dairy"), tFew = K(2, "fewer stones"), tLow = K(2, "low-calcium");
  const [sc, al] = pop(t, tOne, 0.5);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tDairy} capa={[700, 420]} konum={[300, 400]} metin="DAIRY" renk={RENK.altin} boyut={30} />
      </Kamera>
      <div style={{ position: "absolute", left: 300, top: 70, width: 100, height: 100, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>1</div>
      <Baslik t={t} bas={tCut - 0.1} metin="DON'T CUT CALCIUM FOODS" x={440} y={120} boyut={84} renk={RENK.lacivert} />
      <Liste t={t} x={1400} y={260} aralik={88} boyut={34} genislik={480} isaret="onay"
        ogeler={[{ bas: tFew, metin: "FEWER STONES" }, { bas: tLow, metin: "LOW-CALCIUM DIET", renk: RENK.mercan }]} />
    </>
  );
};
export default S54;

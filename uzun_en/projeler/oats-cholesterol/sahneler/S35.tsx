// Sahne 35 — deneme tokluğu ölçtü, LDL'yi değil; yulaf türlerini kıyaslayan çalışma bulunamadı.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFull = K(0, "fullness"), tNot = K(0, "not cholesterol");
  const tFind = K(1, "find any study"), tSteel = K(1, "steel-cut"), tRolled = K(1, "rolled"), tInst = K(1, "instant");
  const tHead = K(1, "head to head"), tLdl = K(1, "LDL");
  const tNobody = K(2, "nobody"), tMore = K(2, "lowers");
  const b0 = s.cumleler[1].bas - 0.05, b1 = s.cumleler[2].bas - 0.05;
  const hap = (bas: number, metin: string, renk: string, y: number, bitis = 1e9) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    return a > 0 ? (
      <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 60, 1700], [20, 110, 1580])}>
        <Etiket t={t} bas={tFind} capa={[690, 700]} konum={[700, 820]} metin="NO STUDY FOUND" renk={RENK.mercan} />
        <Etiket t={t} bas={tSteel} capa={[250, 400]} konum={[250, 140]} metin="STEEL-CUT" renk={RENK.altin} />
        <Etiket t={t} bas={tRolled} capa={[530, 380]} konum={[560, 140]} metin="ROLLED" renk={RENK.yesil} />
        <Etiket t={t} bas={tInst} capa={[800, 390]} konum={[860, 140]} metin="INSTANT" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.8))} taraf="sag" genislik={700} />
      {hap(tFull, "FULLNESS", RENK.yesil, 200, b0)}
      {hap(tNot, "NOT CHOLESTEROL", RENK.mercan, 300, b0)}
      <BaslikBlok t={t} bas={tHead} bitis={b1} satirlar={["NO HEAD-TO-HEAD", "TRIAL"]} x={1860} y={240} boyut={84} hiza="sag" />
      <Not t={t} bas={tLdl} bitis={b1} metin="on LDL" x={1860} y={440} hiza="sag" genislik={500} />
      <Ikon t={t} bas={tNobody} ad="soru" x={1560} y={300} zemin={RENK.altin} />
      {hap(tMore, "NO CLEAR WINNER", RENK.lacivert, 420)}
    </>
  );
};

export default S35;

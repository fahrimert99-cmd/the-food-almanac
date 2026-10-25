// Sahne 17 — BÖLÜM 3 açılışı: 2017 derlemesi. Tabak + bardak üstünde etiketler, sonra iki "düşük" hapı.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPool = K(0, "pooled"), tMeal = K(0, "meal"), tVin = K(0, "vinegar");
  const tSugar = K(1, "blood sugar"), tIns = K(1, "insulin"), tWo = K(1, "without");
  const tSon = s.cumleler[1].bas - 0.2;
  const hap = (bas: number, metin: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    if (al <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 1450, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex", alignItems: "center" }}>
        <Hap metin={metin} renk={RENK.yesil} boyut={36} />
        <span style={{ marginLeft: -22, width: 56, height: 56, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center",
          border: `4px solid ${RENK.kagitAcik}`, zIndex: 2 }}>
          <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={34} renk="#fff" kalinlik={7} /></span>
        </span>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tMeal} bitis={tSon} capa={[600, 740]} konum={[330, 620]} metin="A MEAL" renk={RENK.altin} />
        <Etiket t={t} bas={tVin} bitis={tSon} capa={[1250, 770]} konum={[1560, 700]} metin="VINEGAR" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} y={130} />
      <Baslik t={t} bas={tPool} bitis={tSon} metin="POOLED TRIALS" x={1860} y={210} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      {hap(tSugar, "BLOOD SUGAR", 150)}
      {hap(tIns, "INSULIN", 240)}
      <Not t={t} bas={tWo} metin="lower than without vinegar" x={1450} y={310} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S17;

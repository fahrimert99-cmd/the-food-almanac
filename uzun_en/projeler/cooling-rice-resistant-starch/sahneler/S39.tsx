// Sahne 39 — soğutma pirinci "diyabet dostu" yapmaz; hâlâ çoğunlukla nişasta.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRice = K(0, "white rice"), tFood = K(0, "diabetes-friendly"), tStill = K(1, "still"), tBig = K(1, "big bowl");
  const son = tStill - 0.25;
  const [sc, al] = pop(t, tFood, 0.5);
  const a = al * sol(t, son);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1780])}>
        <Etiket t={t} bas={tRice} bitis={son} capa={[470, 290]} konum={[1250, 220]} metin="WHITE RICE" renk={RENK.altin} />
        <Etiket t={t} bas={tBig} capa={[760, 330]} konum={[1260, 560]} metin="A BIG BOWL" renk={RENK.mercan} />
      </Kamera>
      {a > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 430, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a, display: "flex",
          alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
          padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep,
          boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
          <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="carpi" boyut={22} renk="#fff" />
          </span>
          DIABETES-FRIENDLY FOOD
        </div>
      )}
      <Baslik t={t} bas={tStill} metin="STILL" x={1860} y={170} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "mostly digestible")} metin="MOSTLY STARCH" x={1860} y={290} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S39;

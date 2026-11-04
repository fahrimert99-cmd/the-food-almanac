// Sahne 55 — kendi ölçümün: taze vs soğutulmuş pirinç, aynı porsiyon.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGlu = K(0, "glucose"), tFresh = K(1, "Fresh"), tCool = K(1, "cooled"), tSame = K(1, "same"), tOwn = K(2, "own");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tGlu} capa={[1290, 690]} konum={[1620, 760]} metin="GLUCOSE SENSOR" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={tOwn} satirlar={["YOUR OWN", "NUMBERS"]} x={100} y={150} boyut={92} />
      <Not t={t} bas={K(2, "average")} metin="matter more than an average from 15 people" x={100} y={340} genislik={520} boyut={30} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 880, display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
        <Hapcik t={t} bas={tFresh} metin="FRESH RICE" renk={RENK.yesil} />
        <Hapcik t={t} bas={tCool} metin="COOLED + REHEATED" renk={RENK.lacivert} />
        <Hapcik t={t} bas={tSame} metin="SAME PORTION" renk={RENK.altin} />
      </div>
    </>
  );
};
export default S55;

// Sahne 48 — Bütçeyle başla: defter, elmalar, "far below" rozeti
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "One"), tBut = K(1, "Start"), tRes = K(2, "reasonable"), tUC = K(3, "UC Davis"), tFar = K(3, "far");
  const [sc, al] = pop(t, tOne, 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1750])}>
        <Etiket t={t} bas={tRes} bitis={tFar - 0.1} capa={[1250, 540]} konum={[1250, 190]} metin="REASONABLE CHOICE" renk={RENK.yesil} />
        <Etiket t={t} bas={tUC} capa={[700, 470]} konum={[470, 190]} metin="UC DAVIS MODEL" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 56, top: 56, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 54, transform: `scale(${sc})`, opacity: al }}>1</div>
      <Baslik t={t} bas={tBut} bitis={tUC} metin="YOUR BUDGET" x={170} y={100} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tFar - 0.05} vurgu="FAR BELOW" not="REFERENCE DOSES" x={1250} y={40} genislik={460} boyut={88} renk={RENK.koyuYesil} />
    </>
  );
};

export default S48;

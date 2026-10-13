// Sahne 52 — ipucu 3: yan yemekleri değiştir.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const AdimNo: React.FC<{ t: number; bas: number; n: number; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - 44, top: y - 44, width: 88, height: 88, borderRadius: "50%", background: RENK.altin,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 30, 1780])}>
        <Etiket t={t} bas={K(2, "tomatoes,")} capa={[1400, 330]} konum={[1640, 160]} metin="TOMATOES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "omelet")} capa={[900, 560]} konum={[330, 900]} metin="OMELET" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "toast")} capa={[800, 280]} konum={[300, 130]} metin="WHOLE GRAIN TOAST" renk={RENK.yesil} />
      </Kamera>
      <AdimNo t={t} bas={0.05} n={3} x={110} y={185} />
      <Baslik t={t} bas={K(1, "Swap")} bitis={K(2, "Scrambled") - 0.1} metin="SWAP THE SIDES" x={150} y={95} boyut={72} renk={RENK.lacivert}
        style={{ textShadow: `0 0 18px ${RENK.kagit}, 0 0 8px ${RENK.kagit}` }} />
    </>
  );
};

export default S52;

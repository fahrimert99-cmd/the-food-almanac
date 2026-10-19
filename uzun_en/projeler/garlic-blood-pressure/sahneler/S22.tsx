// Sahne 22 — 4 kapsül 2 kapsülden iyi değil; sağda sade karşılaştırma
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, ANTON, INTER } from "../kutuphane";

// küçük kapsül çizimi
const Kapsul: React.FC<{ x: number; y: number; sc: number; al: number }> = ({ x, y, sc, al }) => (
  <div style={{ position: "absolute", left: x - 45, top: y - 20, width: 90, height: 40, borderRadius: 20, overflow: "hidden", opacity: al,
    transform: `scale(${sc})`, border: `3px solid ${RENK.lacivert}`, display: "flex", boxShadow: "0 6px 14px rgba(48,40,34,0.2)" }}>
    <div style={{ flex: 1, background: RENK.altin }} />
    <div style={{ flex: 1, background: RENK.kagitAcik }} />
  </div>
);

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "Four"), tIki = K(0, "two");
  const tBas = K(1, "More"), tDoz = K(1, "on top");
  const aP = eout(ilerle(t, 0.1, 0.8));
  const satir = (y: number, say: string, bas: number, adet: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <>
        <div style={{ position: "absolute", left: 1280, top: y - 52, opacity: al, transform: `scale(${sc})`, fontFamily: ANTON, fontSize: 96, color: renk }}>{say}</div>
        {Array.from({ length: adet }, (_, i) => {
          const [c2, a2] = pop(t, bas + 0.1 + i * 0.12, 0.45);
          return <Kapsul key={i} x={1450 + i * 110} y={y} sc={c2} al={a2} />;
        })}
      </>
    );
  };
  const [sn, an] = pop(t, tIki + 0.25, 0.5);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 60, 1850], [40, 100, 1700])}>
        <Etiket t={t} bas={K(0, "capsules")} capa={[880, 690]} konum={[1040, 560]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={tBas} satirlar={["MORE ISN'T", "BETTER"]} x={1860} y={200} boyut={96} hiza="sag" />
      <Not t={t} bas={tDoz} metin="TESTED ON TOP OF REGULAR MEDICATION" x={1860} y={440} hiza="sag" genislik={560} boyut={32} agirlik={800} />
      {satir(660, "4", tDort, 4, RENK.lacivert)}
      {satir(790, "2", tIki - 0.1, 2, RENK.koyuYesil)}
      <div style={{ position: "absolute", left: 1740, top: 790, transform: `translate(-50%, -50%) scale(${sn})`, opacity: an, background: RENK.mercan,
        color: "#fff", borderRadius: 999, padding: "8px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, whiteSpace: "nowrap" }}>
        NOT BETTER
      </div>
    </>
  );
};

export default S22;

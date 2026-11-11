// Sahne 52 — Fikir 1: kahve fincanı, pencere. İstersen sonra ye; slogan yüzünden zorlama.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tNo = K(1, "no need");
  const aSon = eout(ilerle(t, K(2, "weight"), 0.6));
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [60, 20, 1680])}>
        <Etiket t={t} bas={K(1, "later,")} capa={[740, 700]} konum={[740, 420]} metin="EAT LATER" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 110, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", opacity: al, transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 68, border: `5px solid ${RENK.altin}` }}>1</div>
      <div style={{ position: "absolute", right: 0, top: 120, width: 1000, height: 420, opacity: eout(ilerle(t, tNo, 0.6)),
        background: `radial-gradient(ellipse 50% 50% at 62% 50%, ${kagit(0.9)} 0%, ${kagit(0.8)} 55%, ${kagit(0)} 100%)` }} />
      <BaslikBlok t={t} bas={tNo} satirlar={["NO NEED TO", "FORCE BREAKFAST"]} x={1860} y={260} boyut={88} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", right: 60, top: 470, opacity: aSon, fontFamily: INTER, fontWeight: 800, fontSize: 34,
        color: RENK.lacivert, transform: `translateY(${(1 - aSon) * 12}px)` }}>
        THE WEIGHT TRIALS GIVE NO REASON
      </div>
    </>
  );
};
export default S52;

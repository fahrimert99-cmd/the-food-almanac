// Sahne 30 — terazi: doymuş yağın yerine rafine karbonhidrat/şeker koymak kalp hastalığını düşürmedi.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRafine = K(0, "refined"), tDusurmedi = K(0, "did not"), tSwap = K(1, "swap in");
  const [sc, al] = pop(t, tDusurmedi, 0.55);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1800])} />
      <Etiket t={t} bas={tRafine} bitis={tSwap - 0.1} capa={[400, 720]} konum={[400, 960 - 190]} metin="REFINED CARBS, SUGARS" renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 960, top: 40, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex", alignItems: "center",
        gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `4px solid ${RENK.mercan}`, borderRadius: 999, padding: "12px 34px 12px 14px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={32} renk="#fff" kalinlik={7} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert }}>NO DROP IN HEART DISEASE RATES</span>
      </div>
      <Etiket t={t} bas={tSwap} capa={[1450, 700]} konum={[1450, 900]} metin="WHAT YOU SWAP IN" renk={RENK.yesil} />
    </>
  );
};

export default S30;

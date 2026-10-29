// Sahne 36 — Barselona grubunun farkları, manşetler ve geriye dönük analiz.
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, Liste, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "Barcelona"), tHead = K(1, "headlines"), tLook = K(2, "look-back"), tNot = K(2, "not");
  const aKart = eout(ilerle(t, tBas, 0.5)) * sol(t, tHead - 0.1);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])}>
        <Etiket t={t} bas={tHead} bitis={tLook - 0.1} capa={[800, 520]} konum={[1000, 130]} metin="SOME HEADLINES" renk={RENK.altin} />
        <Etiket t={t} bas={tLook} capa={[800, 400]} konum={[1110, 130]} metin="LOOK-BACK ANALYSIS" renk={RENK.koyuYesil} />
      </Kamera>
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 40, top: 40, width: 560, height: 300, opacity: aKart, background: kagit(0.94), borderRadius: 22,
          boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }} />
      )}
      <Not t={t} bas={tBas} bitis={tHead - 0.1} metin="BARCELONA VOLUNTEERS" x={70} y={56} boyut={28} agirlik={800} renk={RENK.altin} />
      <Liste t={t} x={70} y={110} aralik={72} boyut={30} isaret="nokta" genislik={520}
        ogeler={[
          { bas: K(0, "smoked"), bitis: tHead - 0.1, metin: "SMOKED MORE", renk: RENK.mercan },
          { bas: K(0, "less"), bitis: tHead - 0.1, metin: "LESS EDUCATION", renk: RENK.mercan },
          { bas: K(0, "lower"), bitis: tHead - 0.1, metin: "LOWER START SCORES", renk: RENK.mercan },
        ]} />
      {t >= tNot && (() => {
        const a = eout(ilerle(t, tNot, 0.45));
        return (
          <div style={{ position: "absolute", left: 1500, top: 250, transform: `translate(-50%, -50%) scale(${0.8 + 0.2 * a})`, opacity: a,
            display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
            borderRadius: 999, padding: "10px 28px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.murekkep,
            boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad="carpi" boyut={26} renk="#fff" />
            </span>
            NOT THE MAIN TEST
          </div>
        );
      })()}
    </>
  );
};

export default S36;

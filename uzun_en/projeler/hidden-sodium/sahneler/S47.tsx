// Sahne 47 — güvenlik uyarısı. Defter sayfasındaki sahte yazı bir not kartıyla baştan örtülü.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "research"), 0.5);
  const [s2, a2] = pop(t, K(0, "close"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [60, 110, 1800])}>
        {/* defter yazısını örten kart (baştan görünür) */}
        <div style={{ position: "absolute", left: 705, top: 585, width: 520, height: 360, background: RENK.kagitAcik, borderRadius: 22,
          border: `4px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.25)", padding: "26px 30px", boxSizing: "border-box" }}>
          <div style={{ fontFamily: ANTON, fontSize: 56, color: RENK.altin, lineHeight: 1.1 }}>PLEASE NOTE</div>
          <div style={{ marginTop: 18, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1, fontFamily: INTER, fontWeight: 800, fontSize: 38,
            color: RENK.lacivert, lineHeight: 1.25 }}>STOPPED BY THE RESEARCH TEAM</div>
          <div style={{ marginTop: 14, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2, fontFamily: INTER, fontWeight: 800, fontSize: 38,
            color: RENK.koyuYesil, lineHeight: 1.25 }}>WITH CLOSE MONITORING</div>
        </div>
        <Etiket t={t} bas={K(1, "medicine")} capa={[470, 540]} konum={[930, 190]} metin="BP MEDICINE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Please") + 0.1} satirlar={["SAFETY", "FIRST"]} x={1860} y={170} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1290} y={520} aralik={92} boyut={34} isaret="carpi" genislik={580} ogeler={[
        { bas: K(1, "Never"), metin: "NEVER STOP IT", renk: RENK.mercan },
        { bas: K(1, "lower"), metin: "NEVER LOWER IT", renk: RENK.mercan },
        { bas: K(1, "on your own"), metin: "ON YOUR OWN", renk: RENK.mercan },
      ]} />
      <Not t={t} bas={K(1, "because")} metin="JUST BECAUSE YOU CUT BACK ON SALT" x={1290} y={810} boyut={28} agirlik={800} renk={RENK.gri} genislik={580} />
    </>
  );
};
export default S47;

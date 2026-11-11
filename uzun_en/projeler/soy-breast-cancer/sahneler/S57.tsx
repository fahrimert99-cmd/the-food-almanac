// Sahne 57 — İPUCU 4: randevuda konuş. Takvimin sahte yazıları kâğıt tabelayla örtülü; kartlar duvar üstünde.
import React from "react";
import { ANTON, IkonYol, INTER, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KART: React.CSSProperties = { position: "absolute", background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 22,
  boxShadow: "0 10px 26px rgba(48,40,34,0.18)" };

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820]);
  const tSol = K(1, "breast cancer");
  const solCik = K(1, "bring soy") - 0.1;
  const [s4, a4] = pop(t, 0.05, 0.6);
  const aRandevu = eout(ilerle(t, K(1, "appointment") - 0.1, 0.5));
  const aSag = eout(ilerle(t, K(2, "tamoxifen"), 0.5));
  const [sn, an] = pop(t, K(2, "your team"), 0.55);
  const asol = eout(ilerle(t, tSol - 0.1, 0.4)) * (1 - eout(ilerle(t, solCik, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={p}>
        {/* takvim tabelası: sahte rakamları örter */}
        <div style={{ position: "absolute", left: 800, top: 60, width: 330, height: 300, ...KART, borderRadius: 10, background: RENK.kagit }}>
          <div style={{ height: 22, background: RENK.altin, borderRadius: "6px 6px 0 0" }} />
          <div style={{ textAlign: "center", fontFamily: ANTON, fontSize: 150, lineHeight: 1.1, color: RENK.lacivert,
            transform: `scale(${s4})`, opacity: a4 }}>4</div>
          <div style={{ textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: 1.15, letterSpacing: 1,
            color: RENK.koyuYesil, opacity: aRandevu }}>NEXT<br />APPOINTMENT</div>
        </div>
      </Kamera>
      {/* 1. kart: kimler */}
      <div style={{ ...KART, left: 60, top: 60, width: 700, height: 300, opacity: asol }} />
      <div style={{ opacity: asol }}>
        <Liste t={t} x={90} y={92} aralik={88} boyut={34} isaret="nokta" genislik={640} ogeler={[
          { bas: tSol, metin: "HAD BREAST CANCER", renk: RENK.altin, bitis: solCik + 0.4 },
          { bas: K(1, "tamoxifen"), metin: "TAKE TAMOXIFEN", renk: RENK.altin, bitis: solCik + 0.4 },
          { bas: K(1, "aromatase"), metin: "AROMATASE INHIBITOR", renk: RENK.altin, bitis: solCik + 0.4 },
        ]} />
      </div>
      {/* 2. kart: çalışmalarda tamoksifen */}
      <div style={{ ...KART, left: 1140, top: 130, width: 720, height: 210, opacity: aSag, borderColor: RENK.yesil }} />
      <div style={{ position: "absolute", left: 1170, top: 150, width: 660, opacity: aSag }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, color: RENK.altin }}>IN THE STUDIES</div>
        <div style={{ fontFamily: ANTON, fontSize: 56, lineHeight: 1.15, color: RENK.lacivert }}>TAMOXIFEN USERS</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, opacity: eout(ilerle(t, K(2, "did not do"), 0.5)) }}>
          <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={28} renk="#fff" />
          </span>
          <span style={{ fontFamily: ANTON, fontSize: 56, lineHeight: 1.15, color: RENK.koyuYesil }}>DID NOT DO WORSE</span>
        </div>
      </div>
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sn})`, opacity: an, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800,
        fontSize: 30, letterSpacing: 1, color: RENK.murekkep }}>YOUR TEAM KNOWS YOUR SITUATION</div>
    </>
  );
};

export default S57;

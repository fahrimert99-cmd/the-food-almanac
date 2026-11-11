// Sahne 14 — dikkatli ifade: sol üstte iki ölçüt, sonra belirti → idrar kültürü akışı
import React from "react";
import { AdimAkisi, Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, INTER, pop, IkonYol } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "The") - 0.15;
  const [sc, al] = pop(t, K(1, "not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(1, "confirmed")} capa={[640, 800]} konum={[560, 885]} metin="CONFIRMED IN A LAB" renk={RENK.koyuYesil} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={K(0, "careful")} bitis={cik} metin="CAREFUL WORDING" x={80} y={110} boyut={84} renk={RENK.lacivert} />
      <Liste t={t} isaret="onay" aralik={86} boyut={36} genislik={700} x={80} y={200} ogeler={[
        { bas: K(0, "symptomatic"), metin: "SYMPTOMATIC", renk: RENK.altin, bitis: cik },
        { bas: K(0, "lab-confirmed"), metin: "LAB-CONFIRMED", renk: RENK.altin, bitis: cik },
      ]} />
      {/* 2. cümle */}
      <AdimAkisi t={t} x={500} y={120} boyut={32} adimlar={[
        { bas: K(1, "symptoms"), metin: "SYMPTOMS", renk: RENK.mercan },
        { bas: K(1, "urine"), metin: "URINE CULTURE", renk: RENK.koyuYesil },
      ]} />
      <div style={{ position: "absolute", left: 80, top: 230, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
        padding: "10px 28px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
        whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <IkonYol ad="carpi" boyut={34} renk={RENK.mercan} />
        NOT JUST A FEELING
      </div>
    </>
  );
};
export default S14;

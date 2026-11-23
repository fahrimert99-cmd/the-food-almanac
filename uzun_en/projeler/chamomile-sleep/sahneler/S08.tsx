// Sahne 8 — iki kasede kapsüller: papatya özütü ve buğday unu (plasebo); sağda 200 MG başlığı.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 60, 1920], [60, 100, 1740]);
  const [sc, al] = pop(t, K(2, "rated"), 0.55);
  const aCizgi = eout(ilerle(t, K(0, "twice"), 0.6));
  return (
    <>
      <Kamera gorsel="tam/08" pencere={w} />
      {/* sağ taraf: doz başlığı */}
      <Baslik t={t} bas={K(0, "200")} metin="200 MG" x={1180} y={250} boyut={150} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "twice")} metin="TWICE A DAY" x={1180} y={390} boyut={96} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1184, top: 460, height: 6, width: 340 * aCizgi, background: RENK.altin }} />
      <Not t={t} bas={K(0, "28")} metin="for 28 days" x={1184} y={490} boyut={46} renk={RENK.altin} agirlik={800} />
      {/* kapsül kaseleri */}
      <Etiket t={t} bas={K(0, "chamomile")} bitis={K(1, "other") - 0.1} capa={[420, 560]} konum={[470, 330]} metin="CHAMOMILE EXTRACT" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "wheat")} capa={[860, 650]} konum={[1020, 880]} metin="WHEAT FLOUR" renk={RENK.altin} />
      {/* anket kartı */}
      <div style={{ position: "absolute", left: 1184, top: 650, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
        padding: "10px 30px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={28} renk="#fff" />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>SLEEP QUESTIONNAIRE</span>
      </div>
    </>
  );
};

export default S08;

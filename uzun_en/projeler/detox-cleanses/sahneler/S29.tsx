// Sahne 29 — sağlıklı böbrekler baş eder; risk grubu sağ sütunda sırayla (NIH ODS).
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const RISK = [
  { ifade: "chronic kidney", metin: "CHRONIC KIDNEY DISEASE" },
  { ifade: "ACE inhibitors", metin: "ACE INHIBITORS" },
  { ifade: "potassium-sparing", metin: "POTASSIUM-SPARING DIURETICS" },
];

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [180, 60, 1740]);
  const tRisk = K(2, "But people"), tYuksek = K(2, "abnormally");
  const [s1, a1] = pop(t, K(1, "not been shown"), 0.5);
  const [s2, a2] = pop(t, tYuksek, 0.5);
  const kutu: React.CSSProperties = { whiteSpace: "normal", background: RENK.kagitAcik, borderRadius: 22, padding: "10px 22px",
    fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1, lineHeight: 1.25, color: RENK.lacivert,
    boxShadow: "0 8px 22px rgba(48,40,34,0.14)", width: 270, boxSizing: "border-box" };
  return (
    <>
      <Kamera gorsel="tam/29" pencere={cam}>
        <Etiket t={t} bas={K(0, "kidneys")} bitis={tRisk - 0.2} capa={[560, 700]} konum={[300, 220]} metin="HEALTHY KIDNEYS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "potassium from")} bitis={tRisk - 0.2} capa={[1330, 520]} konum={[1640, 300]} metin="POTASSIUM IN FOOD" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(1, "NIH")} metin={s.meta.etiket!} />
      <div style={{ position: "absolute", left: 1610, top: 520, transform: `scale(${s1})`, transformOrigin: "50% 0", opacity: a1 * (t < tRisk - 0.2 ? 1 : 0),
        ...kutu, border: `3px solid ${RENK.yesil}`, display: "flex", gap: 10, alignItems: "center" }}>
        <IkonYol ad="onay" boyut={34} renk={RENK.yesil} kalinlik={7} /> NOT SHOWN TO HARM
      </div>
      <div style={{ position: "absolute", left: 1610, top: 190, display: "flex", flexDirection: "column", gap: 16 }}>
        {RISK.map((r) => {
          const [sc, al] = pop(t, K(2, r.ifade), 0.5);
          return <div key={r.metin} style={{ ...kutu, border: `3px solid ${RENK.mercan}`, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>{r.metin}</div>;
        })}
        <div style={{ ...kutu, border: `3px solid ${RENK.mercan}`, background: RENK.mercan, color: "#fff", transform: `scale(${s2})`,
          transformOrigin: "0% 50%", opacity: a2 }}>CAN DEVELOP ABNORMALLY HIGH LEVELS</div>
      </div>
    </>
  );
};

export default S29;

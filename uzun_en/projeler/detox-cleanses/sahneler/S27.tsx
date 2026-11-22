// Sahne 27 — diyabette bakım ekibine danışma; açlığın olası etkileri üstte hap sırası.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const BELIRTI: { ifade: string; metin: string }[] = [
  { ifade: "headaches", metin: "HEADACHES" },
  { ifade: "fainting", metin: "FAINTING" },
  { ifade: "weakness", metin: "WEAKNESS" },
  { ifade: "dehydration", metin: "DEHYDRATION" },
];

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [60, 70, 1800], [90, 80, 1760]);
  const tF = K(1, "Fasting"), bit = tF - 0.2;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={cam}>
        <Etiket t={t} bas={K(0, "diabetes,")} bitis={bit} capa={[800, 350]} konum={[820, 130]} metin="GLUCOSE METER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "eating plan")} bitis={bit} capa={[380, 560]} konum={[330, 330]} metin="EATING PLAN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "check with")} bitis={bit} capa={[1240, 720]} konum={[1000, 900]} metin="ASK YOUR CARE TEAM" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tF} metin="FASTING ITSELF CAN CAUSE" x={80} y={52} boyut={28} renk={RENK.altin} font="inter" aralik={5} />
      <div style={{ position: "absolute", left: 80, top: 92, display: "flex", gap: 18, whiteSpace: "nowrap" }}>
        {BELIRTI.map((b) => {
          const [sc, al] = pop(t, K(1, b.ifade), 0.5);
          return (
            <div key={b.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, background: RENK.kagitAcik,
              border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800,
              fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{b.metin}</div>
          );
        })}
      </div>
    </>
  );
};

export default S27;

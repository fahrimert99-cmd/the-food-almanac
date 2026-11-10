// Sahne 17 — kalite: 31 denemeden 9'u düşük yanlılık riskli, tipik süre ~11 hafta.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t9 = K(1, "9"), t31 = K(1, "31"), tHafta = K(1, "eleven");
  const [sc, al] = pop(t, tHafta - 0.1, 0.6);
  const yaprak = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [140, 70, 1640])}>
        {/* takvim yüzündeki sahte yazıyı örten boş sayfa + ızgara */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <polygon points="1292,545 1640,598 1620,868 1262,806" fill="#F3EEDF" opacity={yaprak} />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={1296 - i * 6} y1={600 + i * 62} x2={1632 - i * 4} y2={650 + i * 62} stroke={RENK.murekkep} strokeOpacity={0.35} strokeWidth={2.5} />
          ))}
        </svg>
        <Etiket t={t} bas={t9} bitis={7.4} capa={[430, 640]} konum={[390, 880]} metin="9 · LOW BIAS RISK" renk={RENK.yesil} />
        <Etiket t={t} bas={t31} bitis={7.4} capa={[930, 360]} konum={[1330, 250]} metin="31 TRIALS" renk={RENK.lacivert} />
        <div style={{ position: "absolute", left: 1450, top: 560, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, transformOrigin: "50% 0",
          background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 20, padding: "10px 22px", textAlign: "center",
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 58, color: RENK.altin, whiteSpace: "nowrap", lineHeight: 1.1 }}>~11 WEEKS</div>
        </div>
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={4.4} satirlar={["QUALITY", "MATTERS"]} x={100} y={170} boyut={100} />
    </>
  );
};
export default S17;

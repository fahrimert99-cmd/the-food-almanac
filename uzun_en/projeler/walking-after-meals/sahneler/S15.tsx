// Sahne 15 — grafik: öğün sonrası yürüyüş, glikoz düşüşü (Reynolds 2016)
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const tWon = K(0, "won.");
  const t12 = K(1, "12"), t22 = K(1, "22"), tOne = K(1, "the one with");
  const a = eout(ilerle(t, 0.1, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  const [sc, al] = pop(t, tOne, 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.0} metin="AFTER-MEAL WALKING" x={156} y={205} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={tWon - 0.1} metin="WON" x={156 + 715} y={205} boyut={88} renk={RENK.koyuYesil} />
      <Not t={t} bas={1.9} metin={g.alt} x={160} y={272} boyut={32} renk={RENK.lacivert} agirlik={500} />
      <CubukGrafik t={t} bas={t12 - 0.1} x={260} y={500} w={820} h={310} maks={30}
        birimEtiketi="LOWER GLUCOSE OVER 3 HOURS AFTER MEALS"
        cubuklar={[
          { etiket: "ALL MEALS", deger: 12, metin: "−12%", renk: RENK.yesil, bas: t12 - 0.1 },
          { etiket: "EVENING MEAL", deger: 22, metin: "−22%", renk: RENK.koyuYesil, bas: t22 - 0.1 },
        ]} />
      <div style={{ position: "absolute", left: 1240, top: 560, width: 540, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26, padding: "20px 28px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.altin }}>EVENING MEAL</div>
        <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 34, lineHeight: 1.3, color: RENK.lacivert, marginTop: 6 }}>
          most carbohydrate, most sitting afterwards</div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 935, textAlign: "center", opacity: aK, fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S15;

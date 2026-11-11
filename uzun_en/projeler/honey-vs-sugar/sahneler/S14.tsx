// Sahne 14 — 18 çalışma, 33 karşılaştırma, 1.105 kişi; tipik çalışma 8 hafta, ~40 g bal/gün.
import React from "react";
import { Baslik, Etiket, Kamera, INTER, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t18 = K(0, "18"), t33 = K(0, "33"), t1105 = K(0, "1,105");
  const tWeek = K(1, "eight weeks"), t40 = K(1, "40 grams"), t2 = K(1, "two tablespoons");
  const kam = kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1800]);
  const [sk, ak] = pop(t, 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kam}>
        {/* takvimdeki anlamsız harf ve rakamları kâğıt rengiyle kapat */}
        <div style={{ position: "absolute", left: 1190, top: 150, width: 600, height: 410, borderRadius: 22, opacity: ak,
          transform: `scale(${sk})`, background: "#FBF8EC", border: `4px solid ${RENK.altin}`, boxShadow: "0 12px 30px rgba(48,40,34,0.22)" }} />
        <div style={{ position: "absolute", left: 1215, top: 575, width: 150, height: 120, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(246,236,205,1) 0%, rgba(246,236,205,1) 55%, rgba(246,236,205,0) 100%)" }} />
        <Etiket t={t} bas={t2} capa={[1060, 870]} konum={[700, 700]} metin="ROUGHLY 2 TABLESPOONS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1190, top: 150, width: 600, opacity: ak }}>
        <div style={{ position: "absolute", left: 0, width: 600, top: 18, textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 24,
          letterSpacing: 4, color: RENK.gri }}>THE ANALYSIS</div>
      </div>
      <Baslik t={t} bas={t18} metin="18 TRIALS" x={1490} y={290} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={t33} metin="33 COMPARISONS" x={1490} y={385} boyut={62} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={t1105} metin="1,105 PEOPLE" x={1490} y={480} boyut={88} renk={RENK.altin} hiza="orta" />
      <Baslik t={t} bas={tWeek} metin="8 WEEKS" x={100} y={190} boyut={150} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={t40} metin="40 G A DAY" x={100} y={340} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "honey a day")} metin="OF HONEY" x={104} y={430} boyut={38} agirlik={800} />
    </>
  );
};

export default S14;

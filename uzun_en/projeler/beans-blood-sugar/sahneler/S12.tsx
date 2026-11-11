// Sahne 12 — günde en az 1 fincan baklagil (~190 g): fasulye, mercimek, nohut.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: ["1 CUP", "OF LEGUMES"], not: "" };
  const tLow = K(0, "low glycemic"), tCup = K(0, "one cup"), t190 = K(1, "190");
  const tBeans = K(1, "beans,"), tLentils = K(1, "lentils"), tChick = K(1, "chickpeas");
  const [sc, al] = pop(t, 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1760])}>
        {/* kabın üzerindeki bozuk ölçek yazısını örten ölçü kartı */}
        <div style={{ position: "absolute", left: 265, top: 420, width: 190, height: 150, borderRadius: 14, opacity: al,
          transform: `scale(${sc})`, background: "rgba(250,244,230,0.96)", border: `3px solid ${RENK.murekkep}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif", fontWeight: 800,
          fontSize: 34, letterSpacing: 2, color: RENK.murekkep }}>1 CUP</div>
      </Kamera>
      <Etiket t={t} bas={tLow} bitis={tCup - 0.1} capa={[900, 690]} konum={[1380, 760]} metin="LOW GI DIET" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={tCup} bitis={t190 - 0.1} satirlar={b.satirlar} x={1260} y={230} boyut={110} />
      <VurguRozet t={t} bas={t190} vurgu="≈190 G" not={(b.not ?? "").toUpperCase()} x={1480} y={470} genislik={420} boyut={96} renk={RENK.altin} />
      <Etiket t={t} bas={tBeans} capa={[400, 330]} konum={[860, 300]} metin="BEANS" renk={RENK.mercan} />
      <Etiket t={t} bas={tLentils} capa={[1000, 740]} konum={[1330, 880]} metin="LENTILS" renk={RENK.yesil} />
      <Etiket t={t} bas={tChick} capa={[260, 780]} konum={[480, 905]} metin="CHICKPEAS" renk={RENK.altin} />
    </>
  );
};

export default S12;

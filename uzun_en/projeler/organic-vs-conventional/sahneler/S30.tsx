// Sahne 30 — organik skor (16 gıda türü); takipte 1.340 ilk kanser.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, VurguRozet, Baslik } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOft = K(0, "how often"), tSix = K(0, "16 kinds"), tScore = K(0, "organic score"), tN = K(1, "1,340"), tCan = K(1, "first");
  const cik = K(1, "During") - 0.1;
  const cx = 1520;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        <Etiket t={t} bas={tOft} bitis={cik} capa={[800, 540]} konum={[1020, 760]} metin="HOW OFTEN: ORGANIC" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <VurguRozet t={t} bas={tSix} bitis={cik} vurgu="16" not="KINDS OF FOOD" x={cx} y={190} renk={RENK.koyuYesil} genislik={420} boyut={110} />
      {t >= tScore && t < cik + 0.4 && (
        <div style={{ position: "absolute", left: cx, top: 470, transform: "translateX(-50%)", opacity: t < cik ? 1 : 0.5 }}>
          <Hap metin="→ ORGANIC SCORE" renk={RENK.altin} boyut={36} />
        </div>
      )}
      <Baslik t={t} bas={tN} metin="1,340" x={cx} y={260} boyut={150} hiza="orta" renk={RENK.lacivert} style={{ minWidth: 500 }} />
      <Baslik t={t} bas={tCan} metin="FIRST CANCERS" x={cx} y={420} boyut={80} hiza="orta" renk={RENK.mercan} />
    </>
  );
};

export default S30;

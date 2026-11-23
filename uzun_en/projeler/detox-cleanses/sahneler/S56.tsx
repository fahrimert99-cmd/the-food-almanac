// Sahne 56 — bardak + kitaplar: 2015 incelemesi ve kalori etkisi.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAz = K(0, "very little");
  const tHic = K(0, "knew of no");
  const tKal = K(1, "cutting calories");
  const tDon = K(1, "tends to return");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [120, 50, 1700])}>
        <Etiket t={t} bas={K(1, "juice cleanses")} bitis={tKal - 0.1} capa={[420, 560]} konum={[330, 800]} metin="JUICE CLEANSE" renk={RENK.yesil} />
      </Kamera>
      {/* Sağ üst: sırayla rozet ve başlıklar için yumuşak zemin */}
      <div style={{ position: "absolute", right: 0, top: 0, width: 900, height: 330,
        background: `radial-gradient(ellipse 75% 80% at 78% 40%, ${kagit(0.9)} 0%, ${kagit(0)} 100%)` }} />
      <VurguRozet t={t} bas={K(0, "2015")} bitis={tAz - 0.1} vurgu="2015" not="REVIEW OF DETOX DIETS" x={1500} y={110} genislik={420} boyut={84} />
      <BaslikBlok t={t} bas={tAz} bitis={tHic - 0.15} satirlar={["VERY LITTLE", "CLINICAL EVIDENCE"]} x={1860} y={150} boyut={70} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tHic} bitis={tKal - 0.1} vurgu="NONE" not="RANDOMIZED TRIALS OF COMMERCIAL DETOXES" x={1500} y={110}
        genislik={560} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={tKal} bitis={tDon - 0.15} metin="CUTTING CALORIES" x={1860} y={170} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tDon} metin="TENDS TO RETURN" x={1860} y={170} boyut={84} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S56;

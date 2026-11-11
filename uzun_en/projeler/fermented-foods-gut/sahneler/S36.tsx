// Sahne 36 — hangisi daha iyi? Hiçbiri açıkça değil; kefir için daha çok küçük deneme, sonuçlar karışık.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 20, 1800], [90, 50, 1650])}>
        {/* tahta altındaki anlamsız yazı örtülür */}
        <div style={{ position: "absolute", left: 480, top: 1000, width: 960, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(1, "Neither")} capa={[730, 520]} konum={[300, 900]} metin="YOGURT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "Kefir")} capa={[1150, 420]} konum={[1620, 330]} metin="KEFIR" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "which")} bitis={c[1].bas - 0.1} satirlar={["WHICH", "IS BETTER?"]} x={60} y={250} boyut={84} />
      <Baslik t={t} bas={K(1, "clearly")} metin="NEITHER CLEARLY BETTER" x={640} y={60} boyut={60} hiza="orta" renk={RENK.lacivert} />
      <Not t={t} bas={K(2, "small trials")} metin="MORE SMALL TRIALS" x={1860} y={430} hiza="sag" genislik={480} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "mixed")} vurgu="MIXED" not="results" x={1660} y={540} genislik={380} boyut={90} renk={RENK.mercan} />
    </>
  );
};

export default S36;

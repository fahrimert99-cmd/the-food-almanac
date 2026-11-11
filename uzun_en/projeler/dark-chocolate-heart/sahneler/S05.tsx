// Sahne 5 — kakao ağacı, tohumlar, flavanoller
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const Kalp: React.FC<{ t: number; bas: number; x: number; y: number }> = ({ t, bas, x, y }) => {
  const [sc, al] = pop(t, bas, 0.6);
  if (al <= 0) return null;
  return (
    <svg width={120} height={110} viewBox="0 0 24 22" style={{ position: "absolute", left: x - 60, top: y, opacity: al, transform: `scale(${sc})` }}>
      <path d="M12 20 C-2 10 4 0 12 6 C20 0 26 10 12 20 Z" fill={RENK.mercan} stroke={RENK.lacivert} strokeWidth={0.6} />
    </svg>
  );
};

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(0, "seeds")} bitis={bit} capa={[690, 560]} konum={[1300, 640]} metin="SEEDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cacao tree")} bitis={bit} capa={[760, 250]} konum={[1300, 300]} metin="CACAO TREE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "plant compounds")} metin="PLANT COMPOUNDS" x={1440} y={300} boyut={38} renk={RENK.altin} hiza="orta" font="inter" aralik={6} />
      <BaslikBlok t={t} bas={K(1, "flavanols,")} satirlar={["COCOA", "FLAVANOLS"]} x={1440} y={410} boyut={118} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "researchers")} metin="WHY RESEARCHERS STUDY COCOA" x={1440} y={640} boyut={34} hiza="orta" agirlik={800} />
      <Kalp t={t} bas={K(1, "heart.")} x={1440} y={720} />
    </>
  );
};

export default S05;

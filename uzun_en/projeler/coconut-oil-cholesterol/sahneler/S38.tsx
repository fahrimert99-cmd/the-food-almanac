import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S38: statin benzeri düşüş / rafine karbonhidrat takası
const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tR = K(1, "Swapping");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [30, 0, 1860], [90, 0, 1740])}>
        {/* alttaki bozuk yazı kâğıt yamayla örtülür */}
        <div style={{ position: "absolute", left: 780, top: 950, width: 360, height: 130,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "similar")} bitis={tR - 0.2} capa={[690, 520]} konum={[1100, 230]} metin="SIMILAR TO STATINS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "refined")} capa={[1300, 740]} konum={[1380, 460]} metin="REFINED CARBS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "sugar,")} capa={[960, 780]} konum={[1000, 580]} metin="SUGAR" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["SWAP FOR", "WHAT?"]} x={70} y={120} boyut={90} bitis={tR - 0.2} />
      <Ikon t={t} bas={K(1, "not")} ad="carpi" x={1190} y={150} zemin={RENK.mercan} boyut={72} />
      <Not t={t} bas={K(1, "same")} metin="NOT THE SAME BENEFIT" x={1245} y={124} boyut={44} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S38;

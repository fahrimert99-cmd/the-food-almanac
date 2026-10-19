// Sahne 35 — çalışmalar besini ölçtü, sağlık sonuçlarını değil
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <BaslikBlok t={t} bas={K(0, "measured")} bitis={K(1, "They") - 0.1} satirlar={["MEASURED", "IN THE FOOD"]} x={100} y={190} boyut={100}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(0, "nutrients")} bitis={K(1, "They") - 0.1} capa={[1250, 520]} konum={[1330, 230]} metin="NUTRIENTS" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "health")} bitis={K(1, "They") - 0.1} capa={[450, 740]} konum={[450, 560]} metin="NOT HEALTH OUTCOMES" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "what's")} metin="WHAT'S IN THE BOWL" x={100} y={190} boyut={96} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "heart")} metin="NOT YOUR HEART" x={100} y={300} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "gut")} metin="OR GUT, OVER YEARS" x={100} y={395} boyut={64} renk={RENK.lacivert} />
    </>
  );
};

export default S35;

// Sahne 44 — makul biçimde desteklenen: fermente besin diyeti çeşitliliği artırdı, iltihap işaretlerini düşürdü.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840])}>
        <Etiket t={t} bas={K(1, "randomized")} bitis={K(1, "a diet") - 0.1} capa={[600, 640]} konum={[240, 560]} metin="RANDOMIZED TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "healthy")} bitis={K(1, "a diet") - 0.1} capa={[540, 760]} konum={[240, 700]} metin="HEALTHY ADULTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "fermented")} bitis={K(1, "raised") - 0.35} capa={[1190, 500]} konum={[1560, 330]} metin="FERMENTED FOODS" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, K(1, "raised") - 0.3, 0.6))} taraf="sag" genislik={560} opak={0.97} />
      <BaslikBlok t={t} bas={K(0, "reasonably")} satirlar={["REASONABLY", "SUPPORTED"]} x={70} y={150} boyut={72} hiza="sol"
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.15} />
      <Liste t={t} x={1400} y={470} aralik={110} boyut={30} isaret="onay" genislik={480} ogeler={[
        { bas: K(1, "raised"), metin: "DIVERSITY UP" },
        { bas: K(1, "lowered"), metin: "INFLAMMATORY MARKERS DOWN" },
      ]} />
    </>
  );
};

export default S44;

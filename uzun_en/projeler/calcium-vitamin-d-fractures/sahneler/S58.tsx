// Sahne 58 — bakım evindeki yaşlı kadınlar; süt ürünleri ve kemikli konserve somon.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "frail older women"), tHelp = K(0, "together"), tFood = K(1, "Foods like"),
    tMilk = K(1, "milk"), tSalmon = K(1, "canned salmon"), tNeed = K(1, "supply much");
  const aP = eout(ilerle(t, 0, 0.6));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [100, 80, 1700])} />
      <Panel a={aP} taraf="sol" genislik={560} opak={0.9} />
      {/* 1. vuruş: bakım evi denemesi */}
      <BaslikBlok t={t} bas={tTrial - 0.2} satirlar={["FRAIL OLDER", "WOMEN IN CARE"]} x={70} y={190} boyut={72} bitis={tFood - 0.3} />
      <Etiket t={t} bas={tTrial + 0.5} bitis={tFood - 0.3} capa={[1250, 420]} konum={[1500, 100]} metin="OLDER WOMEN IN CARE" renk={RENK.lacivert} />
      {/* 2. vuruş: birlikte yardımcı oldu */}
      <BaslikBlok t={t} bas={tHelp} satirlar={["CALCIUM + D", "SEEMED TO HELP"]} x={70} y={450} boyut={64} bitis={tFood - 0.3}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* 3. vuruş: gıda kaynakları */}
      <Etiket t={t} bas={tMilk} capa={[810, 500]} konum={[560, 300]} metin="MILK" renk={RENK.yesil} />
      <Etiket t={t} bas={tSalmon} capa={[920, 530]} konum={[1000, 690]} metin="SALMON WITH BONES" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tNeed} satirlar={["MUCH OF WHAT", "YOU NEED"]} x={70} y={200} boyut={64} />
    </>
  );
};

export default S58;

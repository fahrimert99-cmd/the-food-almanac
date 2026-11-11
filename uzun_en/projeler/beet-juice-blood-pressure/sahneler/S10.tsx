// Sahne 10 — nitrik oksit damar duvarını gevşetir.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOksit = K(0, "nitric"), tGevsek = K(0, "relax");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [90, 120, 1740])} />
      <Etiket t={t} bas={K(0, "swallowed") + 0.3} bitis={tOksit + 0.5} capa={[1690, 640]} konum={[1500, 880]} metin="BEET JUICE" renk={RENK.mercan} />
      <Baslik t={t} bas={tOksit} metin="NITRIC OXIDE" x={1080} y={150} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tGevsek} metin="RELAXES" x={1080} y={244} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tGevsek + 0.2} metin="ARTERIES" x={1080} y={338} boyut={84} renk={RENK.koyuYesil} />
      {/* soluk mavi nitrik oksit parçacıkları damarın geniş ucuna doğru akar */}
      <Parcaciklar t={t} bas={K(0, "oxide,")} kaynak={[1000, 500]} hedef={[420, 440]} adet={34} aralik={0.12} renk="#6FA8D2" boyut={10}
        kavis={-120} tohum="no" />
      <Etiket t={t} bas={K(1, "wider")} bitis={K(2, "later,")} capa={[400, 580]} konum={[420, 830]} metin="WIDER ARTERY" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "less")} bitis={K(2, "later,")} capa={[1000, 640]} konum={[1100, 830]} metin="LESS PRESSURE" renk={RENK.altin} />
      <Not t={t} bas={K(2, "mouth")} metin="LATER: WHY THE MOUTH STEP MATTERS" x={960} y={850} hiza="orta" boyut={40} agirlik={800}
        renk={RENK.lacivert} />
    </>
  );
};

export default S10;

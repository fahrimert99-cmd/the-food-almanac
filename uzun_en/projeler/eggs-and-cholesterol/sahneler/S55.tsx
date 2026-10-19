// Sahne 55 — yumurta bütün bir diyetin parçası.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlt = K(1, "cholesterol.") - 0.9;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* sağ alttaki imza masa renginde yamayla örtülür */}
        <div style={{ position: "absolute", left: 1650, top: 835, width: 220, height: 60,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(190,164,138) 0%, rgb(190,164,138) 85%, rgba(190,164,138,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "eggs")} bitis={tAlt - 0.3} capa={[1573, 690]} konum={[1640, 900]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "whole")} bitis={tAlt - 0.2} capa={[513, 400]} konum={[400, 120]} metin="WHOLE GRAINS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "nuts,")} bitis={tAlt - 0.2} capa={[280, 700]} konum={[280, 890]} metin="NUTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "lean")} bitis={tAlt - 0.2} capa={[1150, 350]} konum={[1000, 120]} metin="LEAN PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "whole")} bitis={K(1, "The") - 0.1} metin="ONE FOOD IN A WHOLE DIET" x={70} y={80} boyut={64} renk={RENK.lacivert}
        style={{ textShadow: `0 0 16px ${RENK.kagit}` }} />
      <Baslik t={t} bas={tAlt} metin="NATURALLY LOW IN CHOLESTEROL" x={70} y={80} boyut={64} renk={RENK.koyuYesil}
        style={{ textShadow: `0 0 16px ${RENK.kagit}, 0 0 8px ${RENK.kagit}` }} />
    </>
  );
};

export default S55;

// Alışkanlık 4: 165°F'ye kadar ısıt, çorba/sos/et suyu kaynasın, karıştır.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t165 = K(1, "165"), tAll = K(1, "all the way"), tSoup = K(1, "soups"), tSauce = K(1, "sauces"), tGrav = K(1, "gravies"),
    tBoil = K(1, "boil"), tStir = K(1, "stir");
  const aS = eout(ilerle(t, tStir, 0.5));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [60, 80, 1800], [140, 120, 1650])}>
        <Etiket t={t} bas={tAll} bitis={tSoup - 0.1} capa={[655, 540]} konum={[900, 150]} metin="ALL THE WAY THROUGH" renk={RENK.altin} />
        <Etiket t={t} bas={tSoup} bitis={tBoil - 0.2} capa={[420, 590]} konum={[330, 890]} metin="SOUPS" renk={RENK.yesil} />
        <Etiket t={t} bas={tSauce} bitis={tBoil - 0.2} capa={[1180, 460]} konum={[1180, 200]} metin="SAUCES" renk={RENK.mercan} />
        <Etiket t={t} bas={tGrav} bitis={tBoil - 0.2} capa={[1500, 450]} konum={[1640, 230]} metin="GRAVIES" renk={RENK.mercan} />
        <Etiket t={t} bas={tBoil} capa={[1347, 753]} konum={[1580, 900]} metin="BRING TO A BOIL" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="HABIT 4" x={60} y={90} boyut={34} renk={RENK.altin} font="inter" aralik={7} />
      <VurguRozet t={t} bas={t165} vurgu="165°F" not="all the way through" x={330} y={140} genislik={440} boyut={100} renk={RENK.mercan} />
      {aS > 0 && (
        <div style={{ position: "absolute", left: 80, top: 860, opacity: aS * sol(t, 1e9), transform: `translateY(${(1 - aS) * 14}px)` }}>
          <Hap metin="STIR PARTWAY · MICROWAVE" renk={RENK.yesil} boyut={30} />
        </div>
      )}
    </>
  );
};

export default S54;

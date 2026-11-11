// Sahne 44 — organik, sütlü çikolata, çocuklar/hamileler, uyarı
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrg = K(0, "Organic"), tMilk = K(1, "Milk"), tLow = K(1, "lower"), tSug = K(1, "sugar.");
  const tChild = K(2, "children"), tPreg = K(2, "pregnant"), tLimit = K(2, "limit");
  const tCons = K(3, "consumer"), tPeer = K(3, "peer-reviewed"), tWarn = K(3, "warning,");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [20, 20, 1860], [60, 50, 1760])}>
        <Etiket t={t} bas={tLow} bitis={tChild - 0.2} capa={[560, 520]} konum={[330, 190]} metin="MILK: LOWER LEVELS" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tSug} bitis={tChild - 0.2} capa={[610, 640]} konum={[640, 880]} metin="MORE SUGAR" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tChild} bitis={tCons - 0.2} capa={[1460, 330]} konum={[1380, 150]} metin="CHILDREN" renk={RENK.koyuYesil} boyut={28} />
        <Etiket t={t} bas={tPreg} bitis={tCons - 0.2} capa={[1400, 620]} konum={[1330, 900]} metin="PREGNANT PEOPLE" renk={RENK.koyuYesil} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tOrg} bitis={tMilk - 0.1} metin="ORGANIC: NOT SAFER" x={80} y={110} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tLimit} bitis={tCons - 0.2} metin="LIMIT DARK CHOCOLATE" x={80} y={110} boyut={82} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCons} metin="A CONSUMER TEST" x={80} y={90} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPeer} metin="NOT PEER-REVIEWED" x={80} y={170} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tWarn} metin="A WARNING, NOT A FINAL WORD" x={80} y={250} boyut={72} renk={RENK.mercan} />
    </>
  );
};

export default S44;

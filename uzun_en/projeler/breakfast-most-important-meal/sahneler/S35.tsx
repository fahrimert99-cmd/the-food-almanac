// Sahne 35 — yaklaşık bir pound fark; içecekler kahvaltı + öğle. Sol alttaki sahte imza kamera dışında.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1800], [90, 30, 1740]);
  const tMod = K(0, "modest"), tPound = K(0, "pound"), tDr = K(1, "drinks"), tBr = K(1, "breakfast"), tAl = K(1, "alone");
  const bit = tDr - 0.2;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={p}>
        <Etiket t={t} bas={tDr} capa={[480, 330]} konum={[190, 250]} metin="DRINKS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tMod - 0.1} bitis={bit} metin="MODEST GAIN" x={1320} y={150} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tPound - 0.15} bitis={bit} vurgu="OVER 1 LB" not="a little over a pound of difference" x={1560} y={250} genislik={440} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tBr - 0.1} satirlar={["BREAKFAST", "+ LUNCH"]} x={1300} y={150} boyut={92} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={tAl - 0.1} metin="BREAKFAST ALONE?" x={1300} y={390} boyut={70} renk={RENK.mercan} />
    </>
  );
};

export default S35;

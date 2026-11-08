// Sahne 37 — Denemeler sağlıklı beslenen, eklenmiş şekeri ≤%10 kalori olan kişilerde yapıldı.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSaglikli = K(0, "healthy"), tOn = K(0, "ten percent"), tBal = K(1, "honey");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [120, 80, 1700])}>
        <Etiket t={t} bas={tSaglikli} bitis={tBal - 0.2} capa={[760, 800]} konum={[420, 400]} metin="HEALTHY DIETS" renk={RENK.yesil} />
        <Etiket t={t} bas={tBal} capa={[1130, 740]} konum={[1570, 400]} metin="NOT PILED ON" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={tOn} bitis={tBal - 0.2} vurgu="≤10%" not="added sugars, % of calories" x={1660} y={300}
        renk={RENK.yesil} genislik={420} />
    </>
  );
};

export default S37;

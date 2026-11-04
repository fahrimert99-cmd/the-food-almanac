// Sahne 42 — metaller nereden geliyor: toprak ve toz
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhy = K(0, "metals"), tCd = K(1, "cadmium"), tLead = K(2, "Lead"), tDust = K(2, "dust,");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 90, 1750], [50, 130, 1650])}>
        <Etiket t={t} bas={tCd} bitis={tLead - 0.1} capa={[1560, 780]} konum={[1560, 560]} metin="CADMIUM FROM SOIL" renk={RENK.mercan} boyut={26} />
        <Parcaciklar t={t} bas={tCd} kaynak={[1400, 780]} hedef={[1290, 330]} adet={16} aralik={0.14} omur={1.6} yayilma={160} kavis={-60}
          renk={RENK.mercan} tohum="cd" />
        <Etiket t={t} bas={tLead + 0.2} capa={[480, 560]} konum={[620, 250]} metin="LEAD ON THE OUTSIDE" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tDust} capa={[300, 700]} konum={[360, 890]} metin="FROM DUST" renk={RENK.lacivert} boyut={26} />
        <Parcaciklar t={t} bas={tDust} kaynak={[650, 380]} hedef={[600, 560]} adet={14} aralik={0.2} omur={1.3} yayilma={300} kavis={0}
          renk="#B8A98A" tohum="dust" boyut={7} hedefYayilma={300} />
      </Kamera>
      <Baslik t={t} bas={0.2} bitis={K(1, "Cacao") - 0.1} metin="WHY THE METALS?" x={80} y={150} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCd} bitis={tLead - 0.1} metin="CADMIUM" x={80} y={150} boyut={110} renk={RENK.mercan} />
    </>
  );
};

export default S42;

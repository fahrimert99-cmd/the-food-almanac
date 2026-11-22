// Sahne 5 — sporlar: pilav + büyütme dairesi; etiketler ve sağ üstte başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760]);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={w}>
        <Etiket t={t} bas={K(0, "cooking")} bitis={K(2, "cooked") - 0.2} capa={[560, 420]} konum={[300, 250]} metin="COOKED RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "bacillus")} bitis={K(1, "tough") - 0.15} capa={[1230, 790]} konum={[1665, 760]} metin="BACILLUS CEREUS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "tough")} capa={[1180, 730]} konum={[1665, 760]} metin="TOUGH SPORES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "cooked")} bitis={K(2, "those") - 0.1} capa={[760, 480]} konum={[1090, 140]} metin="COOLING SLOWLY" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(2, "wake")} kaynak={[1230, 790]} hedef={[1230, 560]} adet={16} tohum="spor" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "bacillus")} />
      <BaslikBlok t={t} bas={K(2, "spores")} satirlar={["SPORES", "WAKE UP"]} x={1530} y={220} boyut={76}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S05;

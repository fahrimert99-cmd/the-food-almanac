// Sahne 7 — NIH, etiket söylemiyor; sonra "aklınızda tutun, sonra önemli".
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNih = K(0, "National"), tFark = K(0, "differ"), tEtiket = K(0, "label");
  const tKeep = K(1, "Keep"), tLater = K(2, "later");
  const gec = tKeep - 0.15;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [120, 60, 1700], [200, 100, 1520])}>
        <Etiket t={t} bas={tEtiket} bitis={gec} capa={[760, 520]} konum={[1330, 470]} metin="OFTEN NOT LISTED" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tNih} bitis={gec} metin="NIH" x={1100} y={190} boyut={150} renk={RENK.koyuYesil} />
      <Not t={t} bas={tFark} bitis={gec} metin="THE TWO DIFFER IN CHEMICAL MAKEUP" x={1100} y={290} boyut={34} genislik={640} agirlik={800} />
      <BaslikBlok t={t} bas={tKeep} satirlar={["KEEP THAT", "IN MIND"]} x={1100} y={150} boyut={96}
        renkler={[RENK.lacivert, RENK.altin]} />
      <Ikon t={t} bas={tLater} ad="saat" x={1160} y={470} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={tLater} metin="IT MATTERS LATER" x={1230} y={436} boyut={40} agirlik={800} />
    </>
  );
};

export default S07;

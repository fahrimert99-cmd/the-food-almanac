import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 6 — hayvansal gıdalar; alttaki sahte yazı pencere dışında
const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "That's") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [100, 0, 1680], [160, 30, 1580])}>
        <Etiket t={t} bas={K(0, "meat")} bitis={bit} capa={[1560, 690]} konum={[1560, 790]} metin="MEAT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "fish")} bitis={bit} capa={[1000, 600]} konum={[1000, 790]} metin="FISH" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "eggs")} bitis={bit} capa={[400, 670]} konum={[400, 790]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "dairy")} bitis={bit} capa={[440, 400]} konum={[700, 290]} metin="DAIRY" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "naturally")} bitis={bit} metin="ONLY IN ANIMAL FOODS" x={1110} y={150} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(1, "strict")} metin="STRICT VEGETARIANS" x={1110} y={140} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "vegans")} metin="AND VEGANS" x={1110} y={235} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "run")} metin="CAN ALSO RUN SHORT" x={1110} y={310} hiza="orta" boyut={44} renk={RENK.mercan} agirlik={800} />
    </>
  );
};

export default S06;

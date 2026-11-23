// Sahne 6: buğday-arpa-çavdar başlıkları, sonra yiyecek etiketleri, son olarak tabak mesajı
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "cutting") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(1, "bread")} bitis={cik} capa={[640, 520]} konum={[900, 290]} metin="BREAD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "pasta")} bitis={cik} capa={[440, 800]} konum={[440, 915]} metin="PASTA" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "cereal")} bitis={cik} capa={[300, 700]} konum={[150, 800]} metin="CEREAL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "baked")} bitis={cik} capa={[800, 650]} konum={[1130, 620]} metin="BAKED GOODS" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "wheat")} bitis={K(1, "That")} metin="WHEAT" x={1860} y={200} boyut={120} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "barley")} bitis={K(1, "That")} metin="BARLEY" x={1860} y={320} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(0, "rye")} bitis={K(1, "That")} metin="RYE" x={1860} y={440} boyut={120} renk={RENK.altin} hiza="sag" />
      <BaslikBlok t={t} bas={K(1, "changes")} satirlar={["SO MUCH OF", "YOUR PLATE"]} x={1860} y={300} boyut={96} hiza="sag" />
    </>
  );
};
export default S06;

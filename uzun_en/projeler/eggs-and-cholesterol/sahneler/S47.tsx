// Sahne 47 — "güven verici ama" bağlamı: tek mütevazı deneme; diyabetli herkes için doğru demek değil.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGuven = K(0, "reassuring"), tBir = K(0, "one modest"), tKilo = K(0, "losing weight"), tDiyet = K(0, "low saturated");
  const tDegil = K(1, "does not"), tYumurta = K(1, "eggs"), tDiyabet = K(1, "with diabetes");
  const bit = 6.6;
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={tYumurta} capa={[1380, 650]} konum={[1380, 460]} metin="EGGS" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tDiyabet} capa={[720, 750]} konum={[960, 540]} metin="WITH DIABETES" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <Baslik t={t} bas={tGuven} bitis={bit} metin="REASSURING," x={1860} y={200} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tBir} bitis={bit} metin="ONE MODEST TRIAL" x={1860} y={290} boyut={40} agirlik={800} hiza="sag" />
      <Not t={t} bas={tKilo} bitis={bit} metin="PEOPLE LOSING WEIGHT" x={1860} y={350} boyut={40} agirlik={800} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={tDiyet} bitis={bit} metin="LOW SATURATED FAT DIET" x={1860} y={410} boyut={40} agirlik={800} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={tDegil} metin="NOT RIGHT FOR" x={1860} y={190} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tDegil + 0.15} metin="EVERYONE" x={1860} y={300} boyut={96} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S47;

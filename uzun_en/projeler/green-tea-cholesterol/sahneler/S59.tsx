// Sahne 59 — yüksek doz ekstre ve demlenmiş çay: karaciğer enzimi.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEkstre = K(0, "High-dose extract");
  const tKaraciger = K(0, "liver enzyme");
  const tBir = K(0, "one in fifteen");
  const tDemlenmis = K(0, "brewed drink");
  const tGuvenli = K(0, "generally safe");
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tEkstre} bitis={tBir + 3} capa={[1290, 500]} konum={[1500, 880]} metin="HIGH-DOSE EXTRACT" renk={RENK.mercan} />
        <Etiket t={t} bas={tKaraciger} bitis={tBir + 3} capa={[900, 400]} konum={[400, 250]} metin="LIVER ENZYME" renk={RENK.altin} />
        <Etiket t={t} bas={tDemlenmis} capa={[900, 670]} konum={[330, 800]} metin="BREWED TEA" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={tBir} bitis={tDemlenmis - 0.2} vurgu="1 IN 15" not="WOMEN · YEAR-LONG TRIAL" x={330} y={430} genislik={440} />
      <Baslik t={t} bas={tGuvenli} metin="GENERALLY SAFE" x={70} y={150} boyut={84} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tGuvenli + 0.3} ad="onay" x={120} y={300} boyut={84} />
      <Not t={t} bas={tGuvenli + 0.4} metin="the brewed drink" x={190} y={274} boyut={34} />
    </>
  );
};

export default S59;

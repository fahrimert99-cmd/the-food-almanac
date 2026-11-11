import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S37: doymuş yağ -> çoklu doymamış yağ takası, ~%30
const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tT = K(2, "trials");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [30, 0, 1860], [90, 10, 1740])}>
        <Etiket t={t} bas={K(2, "saturated")} capa={[360, 700]} konum={[360, 440]} metin="SATURATED FAT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "polyunsaturated")} capa={[1620, 700]} konum={[1500, 470]} metin="POLYUNSATURATED OIL" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(2, "American")} />
      <Baslik t={t} bas={K(1, "LDL")} bitis={tT - 0.3} metin="LDL" x={960} y={200} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "main")} bitis={tT - 0.3} metin="A MAIN DRIVER OF HEART DISEASE" x={960} y={290} boyut={40} agirlik={800} hiza="orta" />
      <BaslikBlok t={t} bas={tT} satirlar={["SWAP", "STUDIES"]} x={960} y={140} boyut={84} hiza="orta" />
      <VurguRozet t={t} bas={K(2, "30")} vurgu="–30%" not="heart disease in swap trials" x={960} y={400} genislik={440} />
    </>
  );
};
export default S37;

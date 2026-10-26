// Sahne 23 — her yıl metformin: %13 daha yüksek eksiklik olasılığı; katılımcı yaşları. İmza alt kenarda, kamera dışında.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = 5.4;
  return (
    <>
      {/* pencere alt kenarı y<1000: alttaki imza kadraja girmez */}
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 10, 1760], [110, 10, 1700])} />
      <Etiket t={t} bas={K(0, "year")} bitis={3.1} capa={[1500, 700]} konum={[1420, 470]} metin="ONE MORE YEAR" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "13")} bitis={b1} metin="+13%" x={1860} y={190} boyut={170} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={K(0, "percent")} bitis={b1} metin="PER YEAR" x={1860} y={330} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(0, "higher odds")} bitis={b1} metin="HIGHER ODDS OF DEFICIENCY" x={1860} y={400} boyut={36} hiza="sag" agirlik={800} />
      <VurguRozet t={t} bas={K(1, "51")} vurgu="51" not="AT THE START" x={560} y={130} genislik={380} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "64")} vurgu="64–66" not="AVERAGE AGE, LATER VISITS" x={1090} y={130} genislik={560} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "wasn't only")} metin="NOT ONLY OLDER ADULTS" x={1090} y={400} boyut={84} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S23;

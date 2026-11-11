// Sahne 57 — haşlama vitamin kaybı: tencere etiketi, %51/%68 rozetleri, daha iyi yöntemler.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {/* haşlama: tencere */}
      <Etiket t={t} bas={K(0, "Boiling")} bitis={4.6} capa={[1330, 330]} konum={[960, 110]} metin="BOILING" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "frozen")} bitis={6.9} metin="13 FROZEN VEGETABLES" x={60} y={110} boyut={64} renk={RENK.koyuYesil} />
      {/* ortalama kayıplar */}
      <VurguRozet t={t} bas={K(1, "51")} bitis={10.2} vurgu="51%" not="LOST ON AVERAGE" x={250} y={50} renk={RENK.mercan} genislik={380} />
      <VurguRozet t={t} bas={K(1, "68")} bitis={10.2} vurgu="68%" not="LOST ON AVERAGE" x={690} y={50} renk={RENK.mercan} genislik={380} />
      {/* daha iyi yöntemler */}
      <AdimAkisi t={t} x={960} y={100} boyut={30} numarali={false} adimlar={[
        { bas: K(2, "Steaming"), metin: "STEAMING", renk: RENK.yesil },
        { bas: K(2, "microwaving"), metin: "MICROWAVING", renk: RENK.yesil },
        { bas: K(2, "pressure"), metin: "PRESSURE COOKING", renk: RENK.yesil },
      ]} />
      <Etiket t={t} bas={K(2, "better")} capa={[600, 560]} konum={[200, 760]} metin="BETTER" renk={RENK.yesil} />
    </>
  );
};

export default S57;

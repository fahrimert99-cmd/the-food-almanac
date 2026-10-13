// Sahne 40 — adil okuma: kan testinde görülür, kalp hastalığında zor görülür; ardından AHA 2019 danışma raporu. Terazi: yumurta | domates.
// Sağ alttaki küçük işaret kamera dışında tutulur (pencere x <= 1800).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const cik = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [20, 40, 1780], [100, 60, 1700])}>
        <Etiket t={t} bas={K(0, "blood")} bitis={cik} capa={[520, 470]} konum={[520, 275]} metin="BLOOD TESTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "heart")} bitis={cik} capa={[1330, 560]} konum={[1380, 310]} metin="HEART DISEASE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "small")} bitis={cik} metin="SMALL EFFECT" x={960} y={130} boyut={100} hiza="orta" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "easy")} bitis={cik} metin="easy to see" x={470} y={150} hiza="orta" boyut={34} renk={RENK.koyuYesil} agirlik={800} />
      <Not t={t} bas={K(0, "hard")} bitis={cik} metin="hard to see" x={1380} y={175} hiza="orta" boyut={34} renk={RENK.mercan} agirlik={800} />
      {/* 2. cümle: AHA danışma raporu */}
      <BaslikBlok t={t} bas={K(1, "American")} satirlar={["AMERICAN HEART", "ASSOCIATION"]} x={960} y={150} boyut={92} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "2019")} vurgu="LATE 2019" not="advisory" x={1560} y={730} genislik={460} boyut={90} />
    </>
  );
};

export default S40;

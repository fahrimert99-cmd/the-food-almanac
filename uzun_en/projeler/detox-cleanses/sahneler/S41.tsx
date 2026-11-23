// Sahne 41 — iyi hissetmek kanıt değildir
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kelimeZamani, kameraYolu } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  const c1 = c[1].bas - 0.15, c2 = c[2].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={w}>
        <Etiket t={t} bas={K(1, "well-being")} bitis={c2} capa={[930, 260]} konum={[1700, 250]} metin="WELL-BEING" renk={RENK.yesil} boyut={26} />
      </Kamera>
      {/* 1. cümle: sol sütun */}
      <Baslik t={t} bas={K(0, "Feeling")} bitis={c1} metin="FEELING" x={50} y={330} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "lighter")} bitis={c1} metin="LIGHTER," x={50} y={410} boyut={66} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "energetic")} bitis={c1} metin="ENERGETIC" x={50} y={490} boyut={66} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "real")} bitis={c1} metin="CAN BE REAL" x={50} y={590} boyut={34} renk={RENK.altin} font="inter" aralik={4} />
      {/* 2. cümle: kaynak + skor */}
      <KaynakEtiketi t={t} metin="HENNING ET AL. · 2017" bas={K(1, "Henning's")} bitis={c2} />
      <Baslik t={t} bas={K(1, "general")} bitis={c2} metin="SCORES" x={1710} y={380} boyut={62} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "improved")} bitis={c2} metin="IMPROVED" x={1710} y={450} boyut={62} renk={RENK.yesil} hiza="orta" />
      {/* 3. cümle: kanıt değil */}
      <Baslik t={t} bas={K(2, "good feeling")} metin="GOOD FEELING" x={1710} y={380} boyut={56} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "proof")} metin="NOT PROOF" x={1710} y={450} boyut={62} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={K(2, "toxins")} metin="that toxins left your body" x={1710} y={500} boyut={24} hiza="orta" genislik={330} agirlik={700} />
    </>
  );
};

export default S41;

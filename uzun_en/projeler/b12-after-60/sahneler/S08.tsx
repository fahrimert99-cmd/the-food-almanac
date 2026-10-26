// Sahne 8 — bekleme odası sandalyeleri: B12 eksikliği yaşlılarda sık ve fark edilmez.
import React from "react";
import { BaslikBlok, Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHizli = K(0, "easy to miss"), tYirmi = K(1, "20"), tTanimaz = K(1, "unrecognized");
  const tBes = K(2, "one in five"), tBilmez = K(2, "many may not know it");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [90, 80, 1700])} />
      {/* 1. vuruş: kolay gözden kaçar */}
      <Baslik t={t} bas={tHizli} bitis={4.3} metin="EASY TO MISS" x={1860} y={250} boyut={96} hiza="sag" renk={RENK.lacivert} />
      {/* 2. vuruş: kaynak */}
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(1, "2004")} bitis={tYirmi + 5} />}
      {/* 3. vuruş: büyük başlık */}
      <BaslikBlok t={t} bas={tYirmi - 0.15} bitis={17.3} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={230} boyut={100} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <Not t={t} bas={tTanimaz} bitis={17.3} metin="Often unrecognized: the signs are subtle." x={1860} y={455} hiza="sag" genislik={760} boyut={36} />
      {/* 4. vuruş: beşte bir */}
      <VurguRozet t={t} bas={tBes} vurgu="1 IN 5" not="IN THE GROUPS STUDIED" x={1500} y={150} genislik={520} boyut={120} />
      <Not t={t} bas={tBilmez} metin="Many may not know it." x={1500} y={430} hiza="orta" genislik={700} boyut={40} agirlik={800} />
    </>
  );
};

export default S08;

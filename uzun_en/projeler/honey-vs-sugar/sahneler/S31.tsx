// Sahne 31 — katılımcılar: medyan yaş 41, ~5'te 1 diyabet, kısa çalışmalar; yaşlı T2D'den farklı
import React from "react";
import { Baslik, BaslikBlok, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const son = c[2].bas - 0.1;
  const [sc, al] = pop(t, K(1, "trials"), 0.5);
  const sol_ = Math.max(0, 1 - (t - son) / 0.4);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1780])} />
      <Baslik t={t} bas={K(0, "who")} bitis={son} metin="WHO TOOK PART" x={1010} y={190} boyut={100} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "median")} bitis={son} vurgu="41" not="MEDIAN AGE" x={1230} y={290} genislik={340} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "only")} bitis={son} vurgu="1 IN 5" not="HAD DIABETES" x={1640} y={290} genislik={360} renk={RENK.mercan} boyut={84} />
      <div style={{ position: "absolute", left: 1430, top: 620, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol_ }}>
        <Hap metin="TRIALS WERE SHORT" renk={RENK.yesil} boyut={34} />
      </div>
      <Baslik t={t} bas={K(2, "very")} metin="VERY DIFFERENT" x={1010} y={190} boyut={100} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "older")} satirlar={["OLDER ADULT", "WITH YEARS OF", "TYPE 2 DIABETES"]} x={1010} y={360} boyut={76}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S31;

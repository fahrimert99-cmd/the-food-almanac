// Sahne 27 — 2024 derlemesi: 10 deney, 772 katılımcı; uyanma sayısı en net değişim
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t10 = K(0, "10"), t772 = K(0, "772"), tQ = K(1, "improved"), tAw = K(1, "fewer"), tClear = K(1, "clearest");
  const pen = kameraYolu(t, s.sure, [0, 80, 1920], [50, 100, 1800]);
  const [sc, al] = pop(t, tAw, 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={pen}>
        <Etiket t={t} bas={t10} bitis={t772} capa={[620, 520]} konum={[620, 300]} metin="10 TRIALS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2024")} metin="2024 REVIEW" x={140} y={190} boyut={80} renk={RENK.altin} />
      <BaslikBlok t={t} bas={t772} satirlar={["772", "PEOPLE"]} x={1500} y={290} boyut={170} hiza="orta" />
      <Not t={t} bas={K(0, "total") - 0.1} metin="10 trials pooled in 2024" x={1500} y={560} boyut={32} hiza="orta" agirlik={800} />
      <Not t={t} bas={tQ - 0.4} metin="SLEEP QUALITY SCORES: IMPROVED" x={1500} y={680} boyut={32} hiza="orta" agirlik={800} renk={RENK.koyuYesil} genislik={700} />
      <div style={{ position: "absolute", left: 1500, top: 750, transform: `translateX(-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="FEWER AWAKENINGS" renk={RENK.yesil} boyut={34} />
      </div>
      <Ikon t={t} bas={tClear} ad="onay" x={1440} y={880} boyut={72} />
      <Not t={t} bas={tClear + 0.1} metin="CLEAREST CHANGE" x={1495} y={858} boyut={32} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};
export default S27;

// Sahne 1 — 2 yıl ceviz: ceviz kasesi + sağda başlık ve LDL rozeti
import React from "react";
import { BaslikBlok, Etiket, Hap, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAd = K(0, "628");
  const [sc, al] = pop(t, tAd, 0.5);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [150, 90, 1640])}>
        <Etiket t={t} bas={K(0, "walnuts")} bitis={K(0, "lowered")} capa={[600, 330]} konum={[860, 110]} metin="1–2 OUNCES A DAY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} y={130} />
      <BaslikBlok t={t} bas={K(0, "two-year")} satirlar={b.satirlar} x={1130} y={250} boyut={100} />
      <div style={{ position: "absolute", left: 1480, top: 470, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="628 ADULTS, AGED 63–79" renk={RENK.koyuYesil} boyut={30} />
      </div>
      <VurguRozet t={t} bas={K(0, "LDL")} vurgu={b.vurgu!} not="LDL, MG/DL" x={1480} y={560} genislik={420} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "milligrams")} metin="about 4 mg/dL lower LDL" x={1480} y={800} hiza="orta" boyut={30} />
    </>
  );
};

export default S01;

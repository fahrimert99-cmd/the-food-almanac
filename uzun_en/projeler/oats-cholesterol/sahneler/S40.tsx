// Sahne 40 — eklenmiş şeker: AHA sınırı; görselin sağındaki dikiş kâğıt yamayla kapatıldı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        {/* sağdaki dikiş ve kesik kavanoz kenarı: kâğıt rengi yama */}
        <div style={{ position: "absolute", left: 850, top: 0, width: 1070, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 9%, ${kagit(1)} 100%)` }} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "sugar")} satirlar={b.satirlar} x={1860} y={230} boyut={110} hiza="sag" renkler={[RENK.koyuYesil]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "American")} />
      <Not t={t} bas={K(1, "six")} metin="TEASPOONS A DAY" x={1560} y={370} hiza="orta" genislik={600} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "six")} vurgu="6" not="WOMEN" x={1370} y={440} genislik={300} />
      <VurguRozet t={t} bas={K(1, "nine")} vurgu="9" not="MEN" x={1720} y={440} genislik={300} />
      <Etiket t={t} bas={K(2, "Brown")} capa={[480, 440]} konum={[330, 170]} metin="BROWN SUGAR" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "syrup")} capa={[870, 500]} konum={[830, 160]} metin="SYRUP" renk={RENK.mercan} />
    </>
  );
};

export default S40;

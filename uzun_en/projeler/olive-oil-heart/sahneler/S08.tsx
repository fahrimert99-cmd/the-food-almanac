// Sahne 8 — Market rafı testi: UC Davis 2010, 19 marka, ithal yağların %69'u kaldı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

// Şişe etiketlerindeki anlamsız yazıyı örten krem yamalar (görsel koordinatı)
const YAMALAR: [number, number, number, number][] = [
  [267, 567, 96, 220], [407, 560, 70, 213], [627, 557, 80, 206], [749, 549, 71, 208], [853, 544, 74, 205], [927, 540, 102, 187],
];

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tBas = K(0, "caution"), tYil = K(1, "2010"), tEv = K(1, "extra"), t19 = K(1, "19"), t69 = K(2, "69"), tIth = K(2, "imported");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 40, 1800])}>
        {YAMALAR.map((y, i) => (
          <div key={i} style={{ position: "absolute", left: y[0], top: y[1], width: y[2], height: y[3], background: "#F1EDDF", borderRadius: 6 }} />
        ))}
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={m.baslik!.satirlar} x={1860} y={190} boyut={104} hiza="sag" bitis={8.4} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={tYil} />}
      <Etiket t={t} bas={tEv} bitis={13.6} capa={[980, 470]} konum={[1420, 470]} metin="EXTRA VIRGIN" renk={RENK.yesil} />
      <Etiket t={t} bas={t19} bitis={13.6} capa={[600, 200]} konum={[1420, 220]} metin="19 BRANDS" renk={RENK.altin} />
      <Not t={t} bas={tIth} metin="IMPORTED OILS" x={1480} y={170} hiza="orta" boyut={34} agirlik={800} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t69} vurgu={m.baslik!.vurgu!} not={m.baslik!.not} x={1480} y={230} genislik={440} renk={RENK.mercan} />
    </>
  );
};

export default S08;

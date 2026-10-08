// Sahne 33 — Japonya 2025: 10 dk yürüyüş hemen başlayınca glukoz tepesi 182 → 164 mg/dL
import React from "react";
import { AltSis, BaslikBlok, CubukGrafik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const b = m.baslik!;
  const tYaz = K(0, "2025"), tOn = K(0, "twelve"), tDrink = K(0, "glucose drink");
  const tWalk = K(1, "ten minute"), tPeak = K(1, "peak"), t182 = K(1, "182"), t164 = K(1, "164");
  const s1 = s.cumleler[1].bas - 0.1;
  const aGraf = eout(ilerle(t, tPeak - 0.2, 0.5));
  return (
    <>
      {/* alt imza kadraj dışında (y+h < 1040) */}
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [60, 30, 1780], [110, 58, 1700])}>
        <Etiket t={t} bas={tDrink} bitis={s1} capa={[1540, 650]} konum={[1290, 480]} metin="GLUCOSE DRINK" renk={RENK.altin} />
        <Etiket t={t} bas={tWalk} bitis={tPeak - 0.1} capa={[560, 888]} konum={[930, 780]} metin="10-MINUTE WALK" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={1} yukseklik={150} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={0.15} />}
      {/* 1. cümle: başlık + katılımcılar */}
      <BaslikBlok t={t} bas={tYaz} bitis={s1} satirlar={b.satirlar} x={1010} y={250} boyut={130} hiza="orta" />
      <Not t={t} bas={tOn} bitis={s1} metin="12 healthy young adults" x={1010} y={490} hiza="orta" boyut={42} agirlik={800} />
      {/* 2. cümle: tepe glukoz grafiği (boş kâğıt alanı) */}
      <Panel a={aGraf} taraf="sag" genislik={1040} opak={0.96} />
      <Not t={t} bas={tPeak} metin="PEAK GLUCOSE, mg/dL" x={1120} y={150} boyut={36} agirlik={800} />
      <CubukGrafik t={t} bas={t182} x={1120} y={280} w={640} h={440} maks={200}
        cubuklar={[
          { etiket: "NO WALK", deger: 182, metin: "≈ 182", renk: RENK.mercan, bas: t182 - 0.05 },
          { etiket: "10 MIN WALK", deger: 164, metin: "≈ 164", renk: RENK.yesil, bas: t164 - 0.05 },
        ]} />
      <VurguRozet t={t} bas={tWalk + 0.2} bitis={tPeak} vurgu={b.vurgu!} not={b.not} x={1560} y={560} genislik={420} />
    </>
  );
};

export default S33;

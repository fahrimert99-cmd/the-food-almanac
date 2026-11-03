// Sahne 41 — 2025 vaka raporu: 34 yaşında kadın, kilo kaybı için tarçın; karaciğer testleri normale döndü.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOn = K(1, "returned");
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 70, 1700])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <VurguRozet t={t} bas={K(0, "2025")} vurgu="2025" not="CASE REPORT" x={300} y={200} genislik={380} />
      <Not t={t} bas={K(0, "34-year-old")} metin="34-year-old woman" x={140} y={410} boyut={34} agirlik={800} />
      <Baslik t={t} bas={K(0, "liver")} bitis={tOn - 0.2} metin="LIVER INJURY" x={1860} y={150} boyut={84} renk={RENK.mercan} hiza="sag" />
      <Etiket t={t} bas={K(0, "weight")} capa={[760, 520]} konum={[1090, 880]} metin="FOR WEIGHT LOSS" renk={RENK.altin} />
      <Not t={t} bas={K(0, "prolonged")} metin="over a prolonged period" x={140} y={455} boyut={30} bitis={tOn - 0.2} />
      <Baslik t={t} bas={tOn} metin="LIVER TESTS NORMAL" x={1860} y={150} boyut={72} renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={K(1, "normal")} ad="onay" x={1740} y={265} boyut={84} />
      <Not t={t} bas={K(1, "after")} metin="after she stopped" x={140} y={455} boyut={34} />
    </>
  );
};
export default S41;

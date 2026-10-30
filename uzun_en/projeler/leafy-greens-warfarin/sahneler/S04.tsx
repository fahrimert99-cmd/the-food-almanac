import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 4 — mikroskop masası; sağ üstte marka, sonra konu başlığı
const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisMarka = K(1, "what") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(1, "warfarin")} capa={[1150, 700]} konum={[1330, 480]} metin="WARFARIN" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={0.05} bitis={bitisMarka} metin={MARKA.slogan} x={1440} y={330} boyut={30} hiza="orta" renk={RENK.altin} agirlik={800} genislik={760} />
      <Baslik t={t} bas={0.05} bitis={bitisMarka} metin={MARKA.filigran} x={1440} y={250} boyut={100} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "what")} metin="WHAT WARFARIN" x={1840} y={180} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "actually")} metin="ACTUALLY DOES" x={1840} y={285} boyut={90} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;

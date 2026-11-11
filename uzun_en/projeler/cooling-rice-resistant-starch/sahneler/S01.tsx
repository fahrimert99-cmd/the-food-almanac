// Sahne 1 — iddia: soğutulmuş pirinç, %18 daha küçük yanıt. Sağ boş kâğıt alanda başlık + rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYetiskin = K(0, "healthy");
  const tSogutma = K(0, "cooled");
  const t18 = K(0, "18");
  const tYanit = K(0, "response");
  const tTaze = K(0, "fresh");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={tSogutma} capa={[753, 470]} konum={[760, 270]} metin="COOLED, REHEATED" renk={RENK.altin} />
        <Etiket t={t} bas={tYanit} capa={[520, 790]} konum={[930, 880]} metin="GLUCOSE METER" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tTaze} capa={[300, 440]} konum={[290, 300]} metin="FRESH RICE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.15} />
      <Not t={t} bas={tYetiskin - 0.2} metin="15 HEALTHY ADULTS" x={1860} y={190} hiza="sag" boyut={34} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={tSogutma - 0.1} metin="COOLED RICE" x={1860} y={330} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t18} vurgu="–18%" not="smaller glucose response" x={1610} y={430} genislik={420} />
    </>
  );
};

export default S01;

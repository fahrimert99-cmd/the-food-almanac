import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

// kâğıt rengi yama (kusur örtüsü)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t97 = K(0, "1997"), t10 = K(0, "10"), tJuice = K(0, "grapefruit juice"), t3 = K(0, "three times");
  const tBio = K(1, "biopsies"), t62 = K(1, "62");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])}>
        <Yama x={1860} y={1055} w={200} h={90} />
      </Kamera>
      <AltSis a={0.4} yukseklik={120} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={t97} />
      <Baslik t={t} bas={t10} bitis={tBio - 0.2} metin="10 HEALTHY MEN" x={140} y={230} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={t3} bitis={tBio - 0.2} metin="JUICE 3× A DAY · 6 DAYS" x={146} y={330} boyut={36} agirlik={700} />
      <Etiket t={t} bas={tJuice} bitis={tBio - 0.2} capa={[1140, 900]} konum={[1100, 650]} metin="GRAPEFRUIT JUICE" renk={RENK.mercan} boyut={26} />
      <Etiket t={t} bas={tBio} capa={[1640, 640]} konum={[1330, 420]} metin="GUT BIOPSIES" renk={RENK.lacivert} boyut={28} />
      <VurguRozet t={t} bas={t62} vurgu={b.satirlar[0]} not={b.not!.toUpperCase()} x={500} y={270} renk={RENK.mercan} genislik={520} boyut={150} />
    </>
  );
};
export default S31;

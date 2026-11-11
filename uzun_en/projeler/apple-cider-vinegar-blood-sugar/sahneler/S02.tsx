// Sahne 2 — öğün görseli altta; başlık ve −31% rozeti üstteki boş kâğıtta.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tRozet = K(1, "31");
  return (
    <>
      {/* imza sağ altta: pencere alt kenarı y<1030 kalır */}
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1740], [50, 30, 1650])}>
        <Etiket t={t} bas={K(1, "liquid")} bitis={tRozet + 0.8} capa={[660, 600]} konum={[640, 290]} metin="LIQUID VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "starchy")} bitis={tRozet + 0.8} capa={[1200, 790]} konum={[1080, 560]} metin="STARCHY MEAL" renk={RENK.mercan} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(0, "Arizona")} />}
      <Baslik t={t} bas={K(0, "twelve")} bitis={K(0, "starchy") - 0.1} metin="12 HEALTHY ADULTS" x={1860} y={190} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "starchy")} metin="STARCHY MEAL" x={1860} y={190} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "blood")} bitis={tRozet - 0.1} metin="blood sugar rise in the first hour" x={1860} y={280} hiza="sag" boyut={36} genislik={760} />
      <VurguRozet t={t} bas={tRozet} vurgu={m.baslik?.vurgu ?? "−31%"} not={m.baslik?.not} x={1610} y={290} genislik={460} renk={RENK.koyuYesil} />
    </>
  );
};

export default S02;

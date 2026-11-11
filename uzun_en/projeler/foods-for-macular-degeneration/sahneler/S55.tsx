// Sahne 55 — Diğer karotenoidler: üst boş kâğıtta rozet ve etiketler.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCar = K(0, "carrots"), tOr = K(0, "orange"), tPct = K(0, "25"), tVar = K(1, "variety");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={tCar} bitis={tVar} capa={[900, 520]} konum={[760, 110]} metin="CARROTS" renk={RENK.mercan} />
        <Etiket t={t} bas={tOr} bitis={tVar} capa={[1500, 560]} konum={[1600, 330]} metin="ORANGE FRUIT" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      <VurguRozet t={t} bas={tPct} vurgu="25–35%" not="lower risk · advanced disease" x={300} y={140} genislik={440} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tVar} metin="VARIETY" x={1560} y={200} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={tVar + 0.4} metin="on the plate" x={1560} y={270} boyut={34} />
    </>
  );
};

export default S55;

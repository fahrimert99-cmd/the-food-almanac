import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 1 — 300 evde pişiren, 4'te 1 salata
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={K(0, "raw chicken")} capa={[610, 640]} konum={[1180, 800]} metin="RAW CHICKEN" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={K(0, "300 home cooks") - 0.1} metin="300 HOME COOKS" x={1470} y={250} boyut={72} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "one in four")} vurgu="1 IN 4" not="GOT RAW CHICKEN GERMS ONTO THEIR SALAD" x={1470} y={330} genislik={520} boyut={130} renk={RENK.mercan} />
    </>
  );
};
export default S01;

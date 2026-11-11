// Sahne 48 — 2001 çalışması: Seville portakal suyu +%76, greyfurt suyu +%93 (felodipin maruziyeti).
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "Seville")} capa={[520, 560]} konum={[215, 620]} metin="SEVILLE JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "grapefruit")} capa={[1380, 560]} konum={[1665, 660]} metin="GRAPEFRUIT JUICE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "2001")} />
      <VurguRozet t={t} bas={K(0, "76")} vurgu="+76%" not="felodipine exposure" x={220} y={250} genislik={340} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "93")} vurgu="+93%" not="felodipine exposure" x={1680} y={250} genislik={340} renk={RENK.mercan} />
    </>
  );
};

export default S48;

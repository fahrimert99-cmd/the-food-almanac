// Sahne 33 — tartı üstünde iki kitap: dağılım belirsiz, toplam protein daha güçlü.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  const tSpread = K(0, "spread"), tUns = K(0, "unsettled"), tTiny = K(1, "tiny"), tTot = K(2, "total"), tStr = K(2, "stronger");
  const bit1 = tTot - 0.15;
  return (
    <>
      <Kamera gorsel="tam/33" pencere={p} />
      {/* 1. vuruş: dağılım belirsiz */}
      <Baslik t={t} bas={tSpread - 0.1} bitis={bit1} metin="THE SPREAD ITSELF" x={960} y={170} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tUns - 0.1} bitis={bit1} metin="UNSETTLED" x={960} y={300} boyut={110} renk={RENK.altin} hiza="orta" />
      {/* 2. vuruş: iki küçük çalışma */}
      <Etiket t={t} bas={tTiny - 0.5} bitis={tTot + 0.6} capa={[470, 520]} konum={[400, 380]} metin="TINY STUDY" renk={RENK.mercan} />
      <Etiket t={t} bas={tTiny - 0.1} bitis={tTot + 0.6} capa={[1450, 520]} konum={[1520, 380]} metin="TINY STUDY" renk={RENK.mercan} />
      {/* 3. vuruş: toplam protein */}
      <Baslik t={t} bas={tTot - 0.1} metin="TOTAL PROTEIN" x={960} y={170} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tStr - 0.1} metin="STRONGER CASE" x={960} y={300} boyut={100} renk={RENK.altin} hiza="orta" />
    </>
  );
};

export default S33;

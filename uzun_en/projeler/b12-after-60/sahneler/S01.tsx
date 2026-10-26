// Sahne 1 — 38% vs 15%: mide solda, sağda iki rozet.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={p}>
        {/* alt imza kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 440, top: 950, width: 240, height: 110,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "thinning")} capa={[930, 450]} konum={[1180, 690]} metin="THINNING LINING" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "3,299")} metin="38% VS 15%" x={1860} y={170} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "3,299") + 0.25} metin="LOW B12, WITH AND WITHOUT A THINNING LINING" x={1860} y={232} hiza="sag" boyut={26} agirlik={800} renk={RENK.gri} genislik={760} />
      <VurguRozet t={t} bas={K(0, "38")} vurgu="38%" not="THINNING LINING" x={1290} y={330} renk={RENK.mercan} genislik={360} boyut={120} />
      <VurguRozet t={t} bas={K(1, "15")} vurgu="15%" not="COMPARISON GROUP" x={1670} y={330} renk={RENK.yesil} genislik={360} boyut={120} />
    </>
  );
};

export default S01;

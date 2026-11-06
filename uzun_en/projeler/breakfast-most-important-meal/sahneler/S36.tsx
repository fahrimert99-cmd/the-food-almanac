// Sahne 36 — Japonya kohortu: 701 yetişkin, kahvaltıda kaliteli protein ≈ yarı risk (ilişki).
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const t701 = K(0, "701"), tAge = K(0, "aged"), tHi = K(1, "highest"), tHalf = K(1, "half"), tAssoc = K(2, "association");
  const bit1 = K(1, "those") - 0.1, bit2 = tAssoc - 0.15;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={p}>
        <Etiket t={t} bas={tHi - 0.1} capa={[1010, 740]} konum={[1010, 905]} metin="QUALITY PROTEIN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={t701 - 0.1} bitis={bit1} metin="701 ADULTS" x={800} y={160} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAge - 0.1} bitis={bit1} metin="aged 60 to 83 · about 7 years" x={800} y={215} boyut={30} />
      <VurguRozet t={t} bas={tHalf - 0.2} bitis={bit2} vurgu="≈ HALF" not="the odds of weak grip strength" x={1010} y={70} genislik={420} renk={RENK.yesil} boyut={96} />
      <Baslik t={t} bas={tAssoc - 0.1} metin="ASSOCIATION, NOT PROOF" x={960} y={150} boyut={68} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S36;

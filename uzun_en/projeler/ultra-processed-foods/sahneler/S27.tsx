// Sahne 27 — mutlak risk: 277'ye karşı 242 (100.000 kişide) ve ≈3–4 fazla vaka (10.000 kişide).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "That's") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1820])}>
        <Etiket t={t} bas={K(0, "heart")} bitis={tSon} capa={[130, 640]} konum={[200, 520]} metin="HEART CASES" renk={RENK.mercan} boyut={24} />
      </Kamera>
      <Not t={t} bas={K(0, "277") - 0.2} bitis={tSon} metin="CASES PER 100,000 PEOPLE A YEAR" x={1250} y={150} hiza="orta" boyut={32} agirlik={800} />
      <VurguRozet t={t} bas={K(0, "277")} bitis={tSon} vurgu="277" not="HIGHEST QUARTER" x={1250} y={215} renk={RENK.mercan} genislik={520} />
      <VurguRozet t={t} bas={K(0, "242")} bitis={tSon} vurgu="242" not="LOWEST QUARTER" x={1250} y={465} renk={RENK.yesil} genislik={520} />
      <BaslikBlok t={t} bas={tSon + 0.15} satirlar={["3–4 EXTRA", "PER 10,000"]} x={1860} y={330} hiza="sag" boyut={104} />
      <Hap metin="277 VS 242 PER 100,000" renk={RENK.altin} style={{ position: "absolute", right: 60, top: 600, opacity: eout(ilerle(t, K(1, "extra"), 0.5)) }} />
    </>
  );
};

export default S27;

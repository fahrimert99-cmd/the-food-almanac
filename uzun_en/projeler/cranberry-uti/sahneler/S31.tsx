// Sahne 31 — 39 ve 67 klinik enfeksiyon, %39 düşük; idrar kültürüyle doğrulananlarda anlamlı fark yok.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBut = c[1].bas;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "cranberry")} capa={[400, 520]} konum={[420, 215]} metin="CRANBERRY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "placebo")} capa={[740, 520]} konum={[900, 215]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <VurguRozet t={t} bas={K(0, "39 times")} vurgu="39" not="CRANBERRY" x={1330} y={200} genislik={280} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "67")} vurgu="67" not="PLACEBO" x={1670} y={200} genislik={280} renk={RENK.lacivert} />
      <Not t={t} bas={0.8} metin="CLINICAL INFECTIONS (INVESTIGATOR-DIAGNOSED)" x={1500} y={140} hiza="orta" boyut={26} agirlik={800} genislik={760} bitis={K(1, "urine") - 0.1} />
      <VurguRozet t={t} bas={K(0, "39 percent")} bitis={tBut - 0.1} vurgu="–39%" not="clinical UTI episodes" x={1500} y={500} genislik={400} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "urine")} metin="URINE-CULTURE CONFIRMED" x={1500} y={520} boyut={52} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "differ")} metin="NO SIGNIFICANT" x={1500} y={600} boyut={84} hiza="orta" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "differ") + 0.15} metin="DIFFERENCE" x={1500} y={690} boyut={84} hiza="orta" renk={RENK.mercan} />
    </>
  );
};

export default S31;

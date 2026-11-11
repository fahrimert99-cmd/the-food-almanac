// Sahne 38 — BMJ Open 2018 yoğurt taraması: raf görseli, ≈900 yoğurt, 5 UK market, şeker karşılaştırması.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        <Etiket t={t} bas={K(0, "supermarkets")} capa={[1500, 500]} konum={[1580, 770]} metin="5 UK SUPERMARKETS" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} y={14} />
      <VurguRozet t={t} bas={K(0, "900")} vurgu="≈900" not="yogurts surveyed" x={330} y={720} genislik={380} boyut={96} />
      <Not t={t} bas={K(0, "compared")} metin="COMPARING SUGAR BY TYPE" x={1580} y={860} hiza="orta" genislik={520} boyut={34} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S38;

// Sahne 15 — 3 yetişkinden 1'inden fazlası federal hükümetin tarihleri düzenlediğini sandı; %26 emin değildi.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(0, "federal")} capa={[900, 520]} konum={[1450, 620]} metin="FEDERAL GOVERNMENT" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "one in")} metin="1 IN 3" x={1860} y={250} boyut={170} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "wrongly")} metin="GOT IT WRONG" x={1860} y={400} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Ikon t={t} bas={K(0, "regulates")} ad="soru" x={1790} y={620} zemin={RENK.mercan} boyut={84} />
      <VurguRozet t={t} bas={K(1, "26")} vurgu="26%" not="weren't sure" x={1640} y={720} genislik={380} renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S15;

// Sahne 30 — asıl nokta: kandaki ölçümler (CRP) değişmedi
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const tCRP = K(1, "C");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kam}>
        <Etiket t={t} bas={K(1, "blood")} bitis={tCRP - 0.2} capa={[649, 473]} konum={[1500, 190]} metin="BLOOD MEASURES" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={K(2, "prunes")} capa={[900, 840]} konum={[1330, 880]} metin="PRUNES" renk={RENK.koyuYesil} boyut={28} />
      </Kamera>
      <Ikon t={t} bas={K(0, "catch")} bitis={tCRP - 0.2} ad="uyari" x={1210} y={450} boyut={92} zemin={RENK.altin} />
      <BaslikBlok t={t} bas={tCRP} satirlar={b.satirlar} x={1140} y={420} boyut={116} renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(2, "did")} ad="carpi" x={1190} y={720} boyut={80} zemin={RENK.mercan} />
      <Not t={t} bas={K(2, "show")} metin="Prunes lowering inflammation throughout the body: not shown" x={1255} y={680} genislik={590} boyut={34} />
    </>
  );
};

export default S30;

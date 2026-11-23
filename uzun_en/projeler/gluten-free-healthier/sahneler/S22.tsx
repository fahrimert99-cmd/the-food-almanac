// Sahne 22 — Tip 2 diyabet çalışması: sağda başlık + iki sayı rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const t15 = K(1, "15,947");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "three cohorts")} bitis={K(1, "Over")} capa={[860, 200]} konum={[1090, 110]} metin="THREE COHORTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "type 2 diabetes")} capa={[1200, 520]} konum={[1610, 520]} metin="TYPE 2 DIABETES" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "200,000") - 0.1} satirlar={b.satirlar} x={1860} y={200} boyut={118} hiza="sag" />
      <Not t={t} bas={K(0, "200,000") + 0.5} metin={b.not!} x={1860} y={425} hiza="sag" boyut={32} />
      <VurguRozet t={t} bas={K(1, "4.24")} bitis={t15 - 0.15} vurgu="4.24M" not="person-years of follow-up" x={1640} y={640} genislik={420} />
      <VurguRozet t={t} bas={t15} vurgu="15,947" not="developed diabetes" x={1640} y={640} genislik={420} renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
    </>
  );
};

export default S22;

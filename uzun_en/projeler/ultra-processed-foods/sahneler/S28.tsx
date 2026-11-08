// Sahne 28 — Chen 2023 (Diabetes Care): üç Amerikan kohortu, 198.636 kişi, ~30+ yıl.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "followed") - 0.3;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        <Etiket t={t} bas={K(0, "three")} bitis={tB} capa={[420, 380]} konum={[1230, 300]} metin="3 AMERICAN STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "nurses")} bitis={tB} capa={[330, 600]} konum={[1230, 450]} metin="NURSES + HEALTH PROS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "type")} bitis={tB} capa={[190, 830]} konum={[860, 860]} metin="TYPE 2 DIABETES" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "198,636") - 0.1} satirlar={["198,636", "PEOPLE"]} x={1860} y={290} hiza="sag" boyut={112} />
      <Not t={t} bas={K(1, "30") - 0.1} metin="UP TO 30+ YEARS OF FOLLOW-UP" x={1860} y={560} hiza="sag" boyut={38} agirlik={800} renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S28;

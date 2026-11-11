// Sahne 30 — Maki denemesi: 373 kadın, 24 hafta; tepsideki bardaklar ve kağıt bardaklar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [40, 170, 1800])}>
        <Etiket t={t} bas={K(1, "cranberry")} capa={[650, 560]} konum={[900, 300]} metin="CRANBERRY BEVERAGE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "placebo")} capa={[235, 640]} konum={[250, 330]} metin="PLACEBO DRINK" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "trial")} bitis={K(1, "373") - 0.1} metin="A JUICE TRIAL" x={1860} y={400} boyut={100} hiza="sag" renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Kevin")} />
      <Baslik t={t} bas={K(1, "373")} metin="373 WOMEN," x={1860} y={400} boyut={124} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "24")} metin="24 WEEKS" x={1860} y={535} boyut={124} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "eight")} metin="8 oz serving every day" x={1860} y={620} hiza="sag" boyut={38} agirlik={800} />
      <Not t={t} bas={K(2, "average")} metin="recent UTI · average age about 41" x={1860} y={800} hiza="sag" boyut={34} agirlik={800} />
    </>
  );
};

export default S30;

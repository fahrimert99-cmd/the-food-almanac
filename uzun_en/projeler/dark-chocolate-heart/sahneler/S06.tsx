// Sahne 6 — işleme flavanolleri azaltabilir
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tK = K(2, "Hold on");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "processed.")} bitis={tK - 0.2} capa={[853, 560]} konum={[250, 770]} metin="COCOA POWDER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.1} bitis={c[1].bas - 0.1} metin="THE FIRST THING" x={56} y={150} boyut={56} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "know")} bitis={c[1].bas - 0.1} metin="TO KNOW" x={56} y={225} boyut={56} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "Flavanols")} bitis={tK - 0.2} satirlar={["FLAVANOLS", "CAN BE LOST"]} x={56} y={200} boyut={84}
        renkler={[RENK.koyuYesil, RENK.mercan]} />
      <Panel a={eout(ilerle(t, tK - 0.2, 0.6))} taraf="sag" genislik={520} />
      <BaslikBlok t={t} bas={tK} satirlar={["HOLD ON", "TO THAT"]} x={1860} y={650} boyut={84} hiza="sag" renkler={[RENK.lacivert, RENK.altin]} />
      <Not t={t} bas={K(2, "later")} metin="IT MATTERS LATER" x={1860} y={850} boyut={34} hiza="sag" agirlik={800} />
    </>
  );
};

export default S06;

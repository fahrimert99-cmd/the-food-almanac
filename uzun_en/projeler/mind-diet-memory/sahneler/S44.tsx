// Sahne 44 — yeşillik: günde bir porsiyon; sağda başlık ve örnek listesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [60, 120, 1650])}>
        <Etiket t={t} bas={K(0, "leafy")} bitis={c[1].bas} capa={[560, 440]} konum={[700, 190]} metin="LEAFY GREENS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "serving")} satirlar={["A SERVING", "OF GREENS A DAY"]} x={1860} y={200} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} isaret="onay" x={1520} y={410} aralik={80} boyut={30} genislik={380} ogeler={[
        { bas: K(2, "salad"), metin: "SIDE SALAD" },
        { bas: K(2, "spinach"), metin: "SPINACH IN EGGS" },
        { bas: K(2, "kale"), metin: "KALE IN SOUP" },
      ]} />
    </>
  );
};

export default S44;

// Sahne 21 — sinir refleksi: ağız ve boğazdan sinirlere giden sinyal
import React from "react";
import { Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(1, "mouth")} capa={[760, 520]} konum={[1150, 520]} metin="MOUTH" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "throat")} capa={[640, 700]} konum={[1150, 690]} metin="THROAT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "nerves")} capa={[620, 900]} konum={[1150, 860]} metin="NERVES" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={K(1, "signals")} kaynak={[740, 560]} hedef={[560, 880]} adet={26} aralik={0.14} omur={1.8} yayilma={60} kavis={40}
          hedefYayilma={140} tohum="s21" />
      </Kamera>
      <Baslik t={t} bas={K(0, "nerve")} metin="A NERVE" x={1860} y={250} boyut={130} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "reflex.")} metin="REFLEX?" x={1860} y={380} boyut={130} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "quiet")} metin="QUIETS OVERACTIVE NERVES" x={1860} y={490} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} genislik={640} />
    </>
  );
};

export default S21;

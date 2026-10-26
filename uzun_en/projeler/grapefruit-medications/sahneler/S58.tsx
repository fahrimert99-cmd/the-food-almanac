// Sahne 58 — özet: CYP3A4 kapısı kapanır, ilaç fazla geçer; FDA listesi.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Panel, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFda = K(1, "FDA");
  const pPanel = eout(ilerle(t, tFda - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700])}>
        <Etiket t={t} bas={K(0, "Grapefruit's")} bitis={2.5} capa={[1500, 330]} konum={[1560, 110]} metin="GRAPEFRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "CYP3A4")} bitis={5.4} capa={[960, 420]} konum={[880, 110]} metin="CYP3A4" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "more")} bitis={tFda - 0.2} capa={[900, 790]} konum={[470, 850]} metin="MORE MEDICINE" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(0, "more")} kaynak={[960, 640]} hedef={[960, 900]} adet={16} aralik={0.2} kavis={0} omur={1.6}
          yayilma={60} hedefYayilma={200} tohum="s58" />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={840} />
      <Baslik t={t} bas={tFda} metin="FDA LISTS" x={90} y={250} boyut={100} renk={RENK.koyuYesil} />
      <Liste t={t} x={90} y={350} isaret="nokta" boyut={48} aralik={110} genislik={700} ogeler={[
        { bas: K(1, "statins,"), metin: "STATINS", renk: RENK.altin },
        { bas: K(1, "blood"), metin: "BLOOD PRESSURE DRUGS", renk: RENK.altin },
        { bas: K(1, "heart-rhythm"), metin: "HEART-RHYTHM DRUGS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S58;

// Sahne 11 — böbrekler: potasyum sodyumun idrarla atılmasına yardım edebilir (olası yol).
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const yama = (x: number, y: number, r: number) => (
    <div style={{ position: "absolute", left: x - r, top: y - r, width: 2 * r, height: 2 * r, borderRadius: "50%",
      background: `radial-gradient(circle, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
  );
  const cik = K(2, "Less") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [70, 100, 1740])}>
        {/* moleküldeki anlamsız yazıları kâğıt yamayla gizle */}
        {yama(270, 292, 64)}
        {yama(394, 163, 38)}
        <Etiket t={t} bas={K(0, "kidneys")} capa={[860, 330]} konum={[1160, 340]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "Potassium")} capa={[255, 420]} konum={[255, 295]} metin="POTASSIUM" renk={RENK.altin} bitis={K(1, "urine") + 1.2} />
        <Parcaciklar t={t} bas={K(1, "release")} kaynak={[610, 620]} hedef={[560, 930]} adet={10} aralik={0.14} omur={1.4}
          yayilma={40} hedefYayilma={30} kavis={40} tohum="sol" />
        <Parcaciklar t={t} bas={K(1, "release") + 0.1} kaynak={[690, 620]} hedef={[712, 930]} adet={10} aralik={0.14} omur={1.4}
          yayilma={40} hedefYayilma={30} kavis={40} tohum="sag" />
        <Etiket t={t} bas={K(1, "sodium")} capa={[712, 880]} konum={[960, 800]} metin="SODIUM OUT" renk={RENK.lacivert} bitis={cik} />
      </Kamera>
      <Baslik t={t} bas={0.3} metin="THE" x={1860} y={250} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "kidneys") - 0.3} metin="KIDNEYS" x={1860} y={372} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "kidneys") + 0.3} metin="one possible route" x={1860} y={470} hiza="sag" boyut={38} />
      <Liste t={t} x={1130} y={600} aralik={84} boyut={34} genislik={740} ogeler={[
        { bas: K(2, "Less"), metin: "LESS SODIUM HELD", renk: RENK.altin },
        { bas: K(2, "fluid"), metin: "LESS FLUID IN VESSELS", renk: RENK.altin },
        { bas: K(2, "lower"), metin: "LOWER PRESSURE", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S11;

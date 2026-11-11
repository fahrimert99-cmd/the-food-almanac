// Sahne 55 — özel neden varsa doktora sor; multivitamin kalkan değil; önce yemek.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNeden = K(0, "specific reason");
  const tDoktor = K(0, "ask your doctor");
  const tMulti = K(1, "multivitamin");
  const tKalkan = K(1, "not a shield");
  const tYemek = K(2, "Food first");
  const tHap = K(2, "pills second");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        {/* bölüm 1: özel neden (şişe) */}
        <Etiket t={t} bas={tNeden} bitis={tDoktor - 0.1} capa={[1370, 450]} konum={[1130, 190]} metin="SPECIFIC REASON" renk={RENK.altin} />
        {/* bölüm 2: küçük ekstra (bardaktaki kapsüller) */}
        <Etiket t={t} bas={tMulti} bitis={tYemek - 0.2} capa={[1600, 712]} konum={[1640, 880]} metin="SMALL EXTRA" renk={RENK.altin} />
        {/* bölüm 3: önce yemek, sonra hap */}
        <Etiket t={t} bas={tYemek} capa={[760, 650]} konum={[560, 910]} metin="FOOD" renk={RENK.yesil} />
        <Etiket t={t} bas={tHap} capa={[1400, 735]} konum={[1330, 900]} metin="PILLS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tDoktor} bitis={tMulti - 0.3} metin="ASK YOUR DOCTOR" x={1860} y={150} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tKalkan} bitis={tYemek - 0.2} metin="NOT A SHIELD" x={1860} y={150} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Ikon t={t} bas={tKalkan + 0.3} bitis={tYemek - 0.2} ad="carpi" zemin={RENK.mercan} x={1360} y={150} boyut={84} />
      <BaslikBlok t={t} bas={tYemek} satirlar={["FOOD FIRST,", "PILLS SECOND"]} x={1860} y={130} boyut={72} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.altin]} />
    </>
  );
};

export default S55;

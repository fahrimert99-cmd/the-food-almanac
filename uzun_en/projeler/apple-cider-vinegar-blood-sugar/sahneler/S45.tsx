// Sahne 45 — yavaş mide: solda mide çizimi, ortada başlık, sağda şişe etiketi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGas = K(0, "gastroparesis"), tSlow = K(1, "slow stomach"), tVin = K(1, "vinegar may"), tAsk = K(1, "ask first");
  const tFlag = K(2, "detail");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [90, 70, 1740])}>
        <Etiket t={t} bas={tGas - 0.1} bitis={tSlow - 0.2} capa={[760, 520]} konum={[1130, 520]} metin="GASTROPARESIS STUDY" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tVin - 0.1} capa={[1560, 700]} konum={[1230, 640]} metin="MAY SLOW IT FURTHER" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <BaslikBlok t={t} bas={tSlow} satirlar={["SLOW", "STOMACH?"]} x={940} y={170} boyut={116} />
      <Not t={t} bas={tAsk} metin={s.meta.baslik?.not ?? ""} x={940} y={430} boyut={38} agirlik={800} genislik={520} />
      <Ikon t={t} bas={tFlag} ad="uyari" x={880} y={810} boyut={76} zemin={RENK.altin} />
      <div style={{ position: "absolute", left: 940, top: 780, opacity: eout(ilerle(t, tFlag, 0.4)) }}>
        <Hap metin="FLAGGED EARLIER" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S45;

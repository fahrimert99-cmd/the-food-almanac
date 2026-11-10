// S08 — mide ve bağırsak: kalsiyum ve oksalat önce bağırsakta buluşur
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCatch = K(0, "catch"), tCa = K(1, "calcium"), tOx = K(1, "oxalate"), tGut = K(1, "your gut"), tKid = K(1, "kidneys"), tMat = K(2, "matter");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [20, 15, 1880]);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={w}>
        <Etiket t={t} bas={tGut} bitis={tKid - 0.1} capa={[560, 640]} konum={[1330, 640]} metin="YOUR GUT" renk={RENK.lacivert} />
        <Etiket t={t} bas={tKid} capa={[1050, 880]} konum={[1480, 880]} metin="YOUR KIDNEYS" renk={RENK.mercan} />
      </Kamera>
      <Parcaciklar t={t} bas={tCa} kaynak={[330, 480]} hedef={[760, 600]} adet={8} renk={RENK.altinAcik} tohum="ca" />
      <Parcaciklar t={t} bas={tOx} kaynak={[330, 700]} hedef={[760, 620]} adet={8} renk={RENK.yesil} tohum="ox" />
      <BaslikBlok t={t} bas={tCatch} satirlar={["THE GUT", "CATCH"]} x={1860} y={190} boyut={120} hiza="sag" adim={0.3} />
      <Not t={t} bas={tMat} metin="what happens there matters a great deal" x={1860} y={440} hiza="sag" boyut={34} genislik={600} />
    </>
  );
};

export default S08;

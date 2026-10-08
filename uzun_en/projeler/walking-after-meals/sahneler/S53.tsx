// Sahne 53 — kas kasılması glukozu insülinden bağımsız çeker; en güçlü etki T2D / prediyabette.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMus = K(0, "contracting muscles"), tGlu = K(0, "pull glucose"), tIns = K(0, "without relying");
  const tStr = K(1, "strongest"), tT2 = K(1, "type 2"), tPre = K(1, "prediabetes,"), tSoon = K(1, "starting soon");
  const tBitis = K(1, "The effect") - 0.15;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={p}>
        <Etiket t={t} bas={tMus} bitis={tBitis} capa={[1090, 300]} konum={[1500, 250]} metin="CONTRACTING MUSCLES" renk={RENK.mercan} />
        <Etiket t={t} bas={tGlu} bitis={tBitis} capa={[955, 580]} konum={[470, 560]} metin="GLUCOSE" renk={RENK.altin} />
        <Parcaciklar t={t} bas={tGlu} kaynak={[960, 850]} hedef={[960, 420]} adet={16} aralik={0.14} omur={1.6} yayilma={160}
          kavis={-60} hedefYayilma={80} tohum="g53" />
      </Kamera>
      {/* sağ: insülin notu */}
      <Baslik t={t} bas={tIns} bitis={tBitis} metin="WITHOUT" x={1240} y={700} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tIns + 0.15} bitis={tBitis} metin="INSULIN" x={1240} y={810} boyut={96} renk={RENK.koyuYesil} />
      {/* cümle 2: sol — kimde en güçlü */}
      <BaslikBlok t={t} bas={tStr} satirlar={["STRONGEST", "EFFECT"]} x={90} y={210} boyut={90} />
      <Liste t={t} isaret="nokta" boyut={36} x={90} y={470} aralik={86} genislik={700} ogeler={[
        { bas: tT2, metin: "TYPE 2 DIABETES", renk: RENK.yesil },
        { bas: tPre, metin: "PREDIABETES", renk: RENK.yesil },
      ]} />
      {/* sağ: erken başla */}
      <Ikon t={t} bas={tSoon} ad="saat" x={1330} y={300} zemin={RENK.altin} />
      <BaslikBlok t={t} bas={tSoon + 0.1} satirlar={["START SOON", "AFTER EATING"]} x={1240} y={420} boyut={80} />
      <Not t={t} bas={K(1, "seems wise")} metin="seems wise" x={1244} y={600} boyut={34} renk={RENK.gri} />
    </>
  );
};

export default S53;

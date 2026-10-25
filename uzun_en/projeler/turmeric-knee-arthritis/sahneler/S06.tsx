// Sahne 6 — zerdeçal bitkisi ve kurkumin.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const son = s.cumleler[1].bas - 0.2;
  const tCur = K(1, "curcumin");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "root")} bitis={son} capa={[480, 826]} konum={[1100, 800]} metin="TURMERIC ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "Curcuma")} bitis={son} capa={[930, 340]} konum={[1330, 300]} metin="CURCUMA LONGA" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "active")} metin="ACTIVE COMPOUND" x={1000} y={320} boyut={34} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tCur} metin={b.satirlar[0]} x={1000} y={440} boyut={140} renk={RENK.koyuYesil} />
      <Not t={t} bas={tCur + 0.35} metin={b.not!} x={1004} y={530} boyut={36} />
      <Liste t={t} x={1000} y={650} aralik={92} boyut={40} isaret="onay" ogeler={[
        { bas: K(1, "supplements"), metin: "SUPPLEMENTS", renk: RENK.yesil },
        { bas: K(1, "studies"), metin: "STUDIES", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S06;

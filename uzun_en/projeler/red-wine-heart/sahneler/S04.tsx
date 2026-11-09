// Sahne 4 — Paris kafesi; sağdaki boş kâğıtta kanal adı sonra "FRANCE".
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1760]);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={w} sinirla={false}>
        <Etiket t={t} bas={K(1, "red")} capa={[460, 625]} konum={[760, 380]} metin="RED WINE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "This")} bitis={c[1].bas - 0.1} metin="THIS IS" x={1340} y={380} boyut={34} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(0, "Food") - 0.1} bitis={c[1].bas - 0.1} metin={MARKA.filigran} x={1340} y={470} boyut={60} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "start")} metin="LET'S START IN" x={1380} y={330} boyut={34} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(1, "France,")} metin="FRANCE" x={1376} y={450} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "puzzle")} metin="A PUZZLE" x={1380} y={590} boyut={80} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;

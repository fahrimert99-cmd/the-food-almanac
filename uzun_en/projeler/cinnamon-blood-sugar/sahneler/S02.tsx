// Sahne 2 — baharat rafı; solda A1C paneli, sonra tarçın kavanozuna etiketler.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas - 0.1;
  const pPan = einout(ilerle(t, 0, 0.6)) * (1 - einout(ilerle(t, cikis, 0.5)));
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(1, "American")} capa={[980, 560]} konum={[1740, 520]} metin="AMERICAN CINNAMON" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "catch")} capa={[1000, 830]} konum={[1700, 860]} metin="THERE'S A CATCH" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Panel a={pPan} taraf="sol" genislik={760} opak={0.97} />
      <Baslik t={t} bas={K(0, "A1C")} bitis={cikis} metin="A1C" x={60} y={330} boyut={170} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "three-month")} bitis={cikis} metin="your three-month average" x={64} y={430} boyut={34} renk={RENK.gri ?? RENK.lacivert} />
      <Baslik t={t} bas={K(0, "no significant")} bitis={cikis} metin="NO SIGNIFICANT" x={60} y={600} boyut={78} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "change")} bitis={cikis} metin="CHANGE" x={60} y={690} boyut={78} renk={RENK.mercan} />
    </>
  );
};

export default S02;

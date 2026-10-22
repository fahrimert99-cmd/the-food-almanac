// Sahne 29 — sonuçlar tutarsız: laktobasil artışı, genel çeşitlilikte çoğu zaman anlamlı fark yok.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tInc = K(0, "inconsistent"), tRise = K(1, "rise"), tLac = K(1, "lactobacilli");
  const tOverall = K(1, "overall"), tChanges = K(1, "changes"), tOften = K(1, "often");
  const cik1 = tOverall - 0.15;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tLac} bitis={cik1} capa={[1340, 380]} konum={[1500, 640]} metin="LACTOBACILLI" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tChanges} capa={[1250, 790]} konum={[1450, 890]} metin="CHANGES IN DIVERSITY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tInc} bitis={cik1} metin="INCONSISTENT" x={80} y={150} boyut={124} renk={RENK.lacivert} />
      <Not t={t} bas={tRise} bitis={cik1} metin="SOME STUDIES: A RISE" x={84} y={236} boyut={34} agirlik={800} renk={RENK.koyuYesil} genislik={560} />
      <Baslik t={t} bas={tOverall} metin="OVERALL DIVERSITY" x={80} y={140} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tOften} metin="OFTEN NOT SIGNIFICANT" x={80} y={236} boyut={64} renk={RENK.mercan} />
    </>
  );
};

export default S29;

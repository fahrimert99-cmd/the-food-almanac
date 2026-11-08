// Sahne 15 — çoğu çalışma balı olağan diyetle kıyasladı; yalnızca 7 karşılaştırma şeker/mısır şurubu.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tHoney = K(0, "honey with"), tDiet = K(0, "usual diet");
  const tSeven = K(1, "seven"), tSyrup = K(1, "corn syrup"), tPract = K(2, "practical part"), tRule = K(2, "simple rule"), tCount = K(2, "count honey");
  // alt kenardaki imzalar kadraj dışında kalsın (y < 960)
  const kam = kameraYolu(t, s.sure, [0, 0, 1700], [60, 0, 1640]);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kam}>
        <Etiket t={t} bas={tHoney} bitis={c[1].bas - 0.1} capa={[440, 480]} konum={[760, 220]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={tDiet} bitis={c[1].bas - 0.1} capa={[900, 740]} konum={[1150, 380]} metin="USUAL DIET" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSyrup} bitis={c[2].bas - 0.1} capa={[810, 590]} konum={[1020, 330]} metin="CORN SYRUP" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tSeven - 0.1} bitis={c[2].bas - 0.1} metin="ONLY 7" x={1150} y={150} boyut={140} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={K(1, "table sugar")} bitis={c[2].bas - 0.1} metin="COMPARISONS WITH SUGAR OR SYRUP" x={1150} y={240} hiza="orta" boyut={32} agirlik={800} />
      <Baslik t={t} bas={tRule - 0.1} metin="A SIMPLE RULE" x={1150} y={150} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tCount - 0.1} metin="HOW TO COUNT HONEY" x={1150} y={240} hiza="orta" boyut={36} agirlik={800} />
      <Not t={t} bas={tPract} bitis={tRule - 0.2} metin="COMING UP: THE PRACTICAL PART" x={1150} y={150} hiza="orta" boyut={36} agirlik={800} />
    </>
  );
};

export default S15;

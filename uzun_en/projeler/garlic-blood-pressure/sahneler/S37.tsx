// Sahne 37 — ikinci sınır: sarımsak denemeleri tansiyonu ölçtü, kalp krizini değil.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSinir = K(0, "Another"), tDusuk = K(1, "Lower pressure"), tKalp = K(1, "heart attacks"), tIlac = K(1, "as the");
  const tBut = K(2, "But"), tGarlic = K(2, "garlic trials"), tBP = K(2, "blood"), tNot = K(2, "not"), tUzun = K(3, "Long-term");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 60, 1720])}>
        <Etiket t={t} bas={tKalp} bitis={tBut - 0.1} capa={[1120, 590]} konum={[1500, 700]} metin="HEART" renk={RENK.mercan} />
        <Etiket t={t} bas={tUzun} capa={[1050, 170]} konum={[1500, 170]} metin="LONG-TERM STUDIES NEEDED" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.7} />
      <Baslik t={t} bas={tSinir} metin="ANOTHER LIMIT" x={80} y={150} boyut={92} renk={RENK.lacivert} />
      {/* s1: düşük tansiyon -> daha az kalp krizi */}
      <Baslik t={t} bas={tDusuk} bitis={tBut - 0.2} metin="LOWER PRESSURE" x={1850} y={250} boyut={64} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tKalp - 0.2} bitis={tBut - 0.2} metin="→ FEWER HEART ATTACKS" x={1850} y={330} boyut={64} hiza="sag" renk={RENK.yesil} />
      <Not t={t} bas={tIlac} bitis={tBut - 0.2} metin="and strokes, as the drug trials show" x={1850} y={380} hiza="sag" boyut={30} />
      {/* s2: sarımsak denemeleri neyi ölçtü */}
      <Not t={t} bas={tGarlic} bitis={tUzun - 0.2} metin="GARLIC TRIALS MEASURED" x={1250} y={170} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="onay" x={1250} y={225} boyut={36} genislik={640}
        ogeler={[{ bas: tBP, metin: "BLOOD PRESSURE", renk: RENK.yesil, bitis: tUzun - 0.2 }]} />
      <Liste t={t} isaret="carpi" x={1250} y={315} boyut={36} genislik={640}
        ogeler={[{ bas: tNot, metin: "NOT HEART ATTACKS", renk: RENK.mercan, bitis: tUzun - 0.2 }]} />
    </>
  );
};
export default S37;

// Sahne 37 — sınır: denemeler kalp olaylarını değil tansiyonu ölçtü.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFew = K(1, "fewer"), tHeart = K(1, "heart attacks"), tStr = K(1, "strokes"), tDrug = K(1, "drug trials");
  const tBut = K(2, "But"), tGarlic = K(2, "garlic trials"), tBP = K(2, "blood pressure"), tNot = K(2, "not"), tLong = K(3, "long-term");
  const yamaSag = { position: "absolute" as const, left: 1620, top: 240, width: 260, height: 260,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` };
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [300, 40, 1500], [330, 50, 1400])}>
        {/* sağdaki silik çizik izleri kâğıt rengiyle örtülür */}
        <div style={yamaSag} />
      </Kamera>
      <Panel a={1} taraf="sol" genislik={760} opak={1} />
      <Baslik t={t} bas={0.05} metin="ANOTHER LIMIT" x={70} y={210} boyut={92} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="onay" x={70} y={330} aralik={100} boyut={32} genislik={640}
        ogeler={[
          { bas: K(1, "lower pressure"), metin: "LOWER PRESSURE", renk: RENK.altin, bitis: tBut - 0.1 },
          { bas: tHeart, metin: "FEWER HEART ATTACKS", renk: RENK.yesil, bitis: tBut - 0.1 },
          { bas: tStr, metin: "FEWER STROKES", renk: RENK.yesil, bitis: tBut - 0.1 },
        ]} />
      <Not t={t} bas={tDrug} bitis={tBut - 0.1} metin="in the drug trials" x={74} y={650} boyut={32} renk={RENK.gri} />
      <Not t={t} bas={tGarlic} metin="GARLIC TRIALS MEASURED" x={74} y={310} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="onay" x={70} y={370} aralik={110} boyut={32} genislik={640}
        ogeler={[{ bas: tBP, metin: "BLOOD PRESSURE", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" x={70} y={480} aralik={110} boyut={32} genislik={640}
        ogeler={[{ bas: tNot + 0.15, metin: "HEART ATTACKS", renk: RENK.mercan }]} />
      <Not t={t} bas={tNot + 0.5} metin="not measured" x={74} y={590} boyut={32} renk={RENK.gri} />
      <Baslik t={t} bas={tLong} metin="LONG-TERM STUDIES" x={70} y={730} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tLong + 0.2} metin="STILL NEEDED" x={70} y={810} boyut={72} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tGarlic} capa={[1150, 640]} konum={[1560, 430]} metin="GARLIC" renk={RENK.altin} boyut={26} />
    </>
  );
};

export default S37;

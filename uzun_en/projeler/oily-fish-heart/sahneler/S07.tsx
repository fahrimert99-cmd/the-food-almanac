// Sahne 7 — önerilen faydalar; kalp ve balık solda, liste sağda.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const kam = kameraYolu(t, s.sure, [0, 100, 1780], [40, 120, 1700]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kam}>
        <Etiket t={t} bas={K(0, "rhythm")} capa={[560, 478]} konum={[860, 250]} metin="HEART RHYTHM" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "proposed")} metin="PROPOSED" x={1160} y={170} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "proposed") + 0.2} metin="BENEFITS" x={1160} y={282} boyut={104} renk={RENK.koyuYesil} />
      <Liste t={t} x={1140} y={440} aralik={92} boyut={34} isaret="sayi" genislik={720} ogeler={[
        { bas: K(0, "steady"), metin: "STEADY HEART RHYTHM", renk: RENK.altin },
        { bas: K(0, "calm"), metin: "CALM INFLAMMATION", renk: RENK.altin },
        { bas: K(0, "affect"), metin: "AFFECT BLOOD CLOTS", renk: RENK.altin },
      ]} />
      <Not t={t} bas={c[1].bas} metin="Most of those ideas still need longer dietary trials to confirm" x={1144} y={760} boyut={34} genislik={680} renk={RENK.mercan} agirlik={700} />
    </>
  );
};
export default S07;

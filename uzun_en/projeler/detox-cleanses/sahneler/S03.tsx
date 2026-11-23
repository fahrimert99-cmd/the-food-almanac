// Sahne 3 — videonun üç sorusu (sağ panel liste)
import React from "react";
import { Baslik, Etiket, Kamera, Liste, kagit, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pw = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  const pP = eout(ilerle(t, 0.05, 0.6));
  return (
    <>
      <Kamera gorsel="tam/03" pencere={pw}>
        <Etiket t={t} bas={K(0, "toxins")} capa={[540, 400]} konum={[300, 180]} metin="TOXINS?" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 960, right: 0, opacity: pP,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 7%, ${kagit(1)} 100%)` }} />
      <Baslik t={t} bas={0.7} metin="BY THE END" x={1080} y={190} boyut={44} renk={RENK.altin} font="inter" agirlik={800} aralik={6} />
      <Liste t={t} x={1080} y={290} aralik={150} boyut={44} genislik={800}
        ogeler={[
          { bas: K(0, "toxins"), metin: "WHAT TOXINS MEANS", renk: RENK.mercan },
          { bas: K(0, "who"), metin: "WHO SHOULD SKIP", renk: RENK.lacivert },
          { bas: K(0, "what does"), metin: "WHAT HELPS YOUR LIVER", renk: RENK.yesil },
        ]} />
    </>
  );
};
export default S03;

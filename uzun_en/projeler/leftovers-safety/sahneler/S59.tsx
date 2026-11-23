// Sahne 59 — koku bir test değildir: pirinç, toksin ve sığ kap.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, Not } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const tTok = K(1, "Toxins"), tNor = K(1, "starchy"), tCool = K(2, "shallow");
  return (
    <>
      <Kamera gorsel="tam/59" pencere={cam}>
        <Etiket t={t} bas={tTok} bitis={K(1, "and") } capa={[1010, 330]} konum={[1490, 130]} metin="B. CEREUS TOXINS" renk={RENK.mercan} />
        <Etiket t={t} bas={tNor} bitis={K(2, "Cool") - 0.1} capa={[520, 560]} konum={[260, 330]} metin="LOOKS NORMAL" renk={RENK.altin} />
        <Etiket t={t} bas={tCool} capa={[1500, 700]} konum={[1560, 880]} metin="SHALLOW CONTAINER" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} bitis={1.5} satirlar={["SMELL IS", "NOT A TEST"]} x={70} y={170} boyut={96} />
      <Not t={t} bas={K(1, "Toxins") + 0.9} bitis={K(1, "and") } metin="SURVIVE REHEATING" x={1490} y={190} boyut={30} hiza="orta" renk={RENK.mercan} agirlik={800} />
    </>
  );
};

export default S59;

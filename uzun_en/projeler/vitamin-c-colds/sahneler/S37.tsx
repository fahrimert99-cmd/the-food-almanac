// Sahne 37 — sabah portakalı güzel bir alışkanlık, soğuk kalkanı değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={K(0, "morning orange")} bitis={c[1].bas - 0.1} capa={[890, 480]} konum={[420, 290]} metin="MORNING ORANGE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "Just")} satirlar={["NOT A", "COLD SHIELD"]} x={1860} y={175} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "research")} metin="THE RESEARCH DOESN'T SUPPORT THAT PROMISE" x={1860} y={395} hiza="sag" boyut={32} agirlik={800} genislik={600} />
      <Liste t={t} ogeler={[{ bas: K(2, "juice"), metin: "JUICE", renk: RENK.mercan }, { bas: K(2, "pills"), metin: "PILLS", renk: RENK.mercan }]}
        x={140} y={150} isaret="carpi" boyut={38} genislik={420} aralik={84} />
    </>
  );
};

export default S37;

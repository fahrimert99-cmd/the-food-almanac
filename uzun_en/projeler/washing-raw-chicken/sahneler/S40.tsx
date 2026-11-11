// Sahne 40 — yüksek risk grupları.
import React from "react";
import { Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDigerleri = K(1, "others");
  const pPanel = eout(ilerle(t, tDigerleri - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "65")} bitis={tDigerleri} capa={[700, 560]} konum={[800, 110]} metin="ADULTS 65 AND OLDER" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={920} />
      <Not t={t} bas={tDigerleri} metin="OTHER HIGHER-RISK GROUPS" x={1170} y={250} boyut={30} agirlik={800} renk={RENK.altin} genislik={600} />
      <Liste t={t} x={1170} y={330} aralik={110} boyut={34} genislik={600} ogeler={[
        { bas: K(1, "children"), metin: "CHILDREN UNDER FIVE", renk: RENK.altin },
        { bas: K(1, "pregnant"), metin: "PREGNANT WOMEN", renk: RENK.altin },
        { bas: K(1, "weakened"), metin: "WEAKENED IMMUNE SYSTEMS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S40;

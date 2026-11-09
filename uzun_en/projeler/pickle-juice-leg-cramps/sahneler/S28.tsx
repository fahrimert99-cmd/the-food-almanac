// Sahne 28 — çalışma yalnızca krampın süresini ölçtü; önlemeyi test etmedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOlc = K(0, "how long");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [720, 260, 1200], [760, 270, 1160])}>
        <Etiket t={t} bas={K(1, "pickle")} capa={[1267, 520]} konum={[1690, 520]} metin="PICKLE JUICE" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={1020} opak={0.97} />
      <BaslikBlok t={t} bas={0.3} satirlar={["STOPS? OR", "PREVENTS?"]} x={80} y={190} boyut={104} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={80} y={440} boyut={38} genislik={900} isaret="onay" ogeler={[
        { bas: tOlc, metin: "HOW LONG A CRAMP LASTED", renk: RENK.yesil },
      ]} />
      <Liste t={t} x={80} y={550} aralik={110} boyut={38} genislik={900} isaret="carpi" ogeler={[
        { bas: K(1, "prevents"), metin: "PREVENTING CRAMPS", renk: RENK.mercan },
        { bas: K(1, "less"), metin: "FEWER CRAMPS", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S28;

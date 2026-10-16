// Sahne 50 — bağlam: tuz azaltma ve DASH, sarımsakla birlikte.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [300, 60, 1620], [380, 90, 1500])} />
      <Panel a={pPanel} taraf="sol" genislik={900} opak={0.96} />
      <BaslikBlok t={t} bas={K(1, "Keep")} satirlar={["KEEP IT IN", "CONTEXT"]} x={90} y={190} boyut={104} />
      <Liste t={t} x={90} y={500} aralik={96} boyut={38} isaret="onay" genislik={760} ogeler={[
        { bas: K(2, "salt"), metin: "CUT SALT" },
        { bas: K(2, "DASH"), metin: "DASH-STYLE PATTERN" },
        { bas: K(2, "alongside"), metin: "DO IT WITH GARLIC", renk: RENK.altin },
      ]} />
      {/* tabaktaki sebzeler */}
      <Etiket t={t} bas={K(2, "DASH") + 0.2} capa={[1500, 400]} konum={[1500, 190]} metin="VEGETABLES" renk={RENK.yesil} />
    </>
  );
};

export default S50;

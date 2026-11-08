import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 2 — Durulamamak yetmez
const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tG = K(1, "bigger than");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [110, 90, 1620])}>
        <Etiket t={t} bas={K(0, "skipped")} bitis={c[1].bas - 0.1} capa={[800, 780]} konum={[1330, 780]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={tG} capa={[1000, 260]} konum={[1330, 130]} metin="GERMS" renk={RENK.mercan} />
        <Etiket t={t} bas={tG + 0.3} capa={[420, 380]} konum={[330, 150]} metin="SALAD" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={640} opak={0.9} />
      <BaslikBlok t={t} bas={K(0, "skipped")} satirlar={["NOT RINSING", "ISN'T ENOUGH"]} x={1870} y={470} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} adim={K(1, "real problem") - K(0, "skipped")} />
    </>
  );
};
export default S02;

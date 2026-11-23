// S42 — 1989 vaka bildirimi
import React from "react";
import { Etiket, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "Tests") - 0.15;
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])}>
        <Etiket t={t} bas={K(0, "first cup")} capa={[1060, 530]} konum={[1380, 420]} metin="THE FIRST CUP" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={680} />
      <VurguRozet t={t} bas={K(0, "1989")} vurgu="1989" not="CASE REPORT" x={1560} y={140} boyut={96} genislik={380} />
      <Liste t={t} x={70} y={190} aralik={92} boyut={34} isaret="nokta" genislik={560} ogeler={[
        { bas: K(0, "eight-year-old"), metin: "8-YEAR-OLD", renk: RENK.lacivert, bitis: gec },
        { bas: K(0, "hay fever"), metin: "HAY FEVER", renk: RENK.altin, bitis: gec },
        { bas: K(0, "severe"), metin: "SEVERE REACTION", renk: RENK.mercan, bitis: gec },
        { bas: K(0, "first cup"), metin: "AFTER FIRST CUP", renk: RENK.mercan, bitis: gec },
      ]} />
      <Not t={t} bas={K(1, "cross-reacted")} metin="CROSS-REACTED WITH" x={70} y={190} boyut={34} agirlik={800} />
      <Liste t={t} x={70} y={270} aralik={92} boyut={34} isaret="nokta" genislik={560} ogeler={[
        { bas: K(1, "ragweed"), metin: "RAGWEED POLLEN", renk: RENK.mercan },
        { bas: K(1, "mugwort"), metin: "MUGWORT POLLEN", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S42;

// Sahne 6 — Kolesterol: mumsu madde; hücre duvarı, hormon, D vitamini.
import React from "react";
import { Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPanel = K(1, "and it is used") - 0.2;
  const aP = eout(ilerle(t, tPanel, 0.6));
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [40, 120, 1800], [150, 190, 1650])}>
        <Etiket t={t} bas={K(0, "waxy")} bitis={K(1, "It builds")} capa={[870, 520]} konum={[1130, 330]} metin="WAXY DROPLETS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "walls")} bitis={tPanel + 0.3} capa={[535, 640]} konum={[300, 300]} metin="CELL WALL" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={760} opak={0.97} />
      <Not t={t} bas={K(1, "make")} metin="CHOLESTEROL IS USED TO MAKE" x={1860} y={330} hiza="sag" boyut={34} agirlik={800} renk={RENK.koyuYesil} />
      <Liste t={t} x={1260} y={420} aralik={120} boyut={44} genislik={600} ogeler={[
        { bas: K(1, "hormones"), metin: "HORMONES", renk: RENK.altin },
        { bas: K(1, "vitamin"), metin: "VITAMIN D", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S06;

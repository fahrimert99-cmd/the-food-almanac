// Sahne 58 — pratik sonuç: sol panelde üç madde, sepete etiket.
import React from "react";
import { Etiket, Kamera, Liste, Panel, RENK, SP, kameraYolu, kelimeZamani, ilerle, eout } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t0 = K(0, "organic"), t1 = K(1, "conventional"), t2 = K(2, "Spend"), t3 = K(2, "fruits");
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [160, 40, 1760], [300, 90, 1520])}>
        <></>
      </Kamera>
      <Panel a={eout(ilerle(t, 0.05, 0.6))} taraf="sol" genislik={780} />
      <Liste t={t} x={70} y={300} isaret="onay" boyut={36} aralik={150} genislik={640} ogeler={[
        { bas: t0, metin: "ORGANIC IF YOU VALUE IT", renk: RENK.yesil },
        { bas: t1, metin: "CONVENTIONAL IS STILL GOOD", renk: RENK.altin },
        { bas: t2, metin: "SPEND WHERE IT MATTERS", renk: RENK.koyuYesil },
      ]} />
      <Etiket t={t} bas={t3} capa={[1040, 820]} konum={[1500, 900]} metin="FRUITS & VEGETABLES" renk={RENK.yesil} />
    </>
  );
};

export default S58;

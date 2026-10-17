// Sahne 16 — kütüphane: NIH/NCCIH temkinli çizgi. Solda panel, sağda sarımsak etiketi.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Panel, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNih = K(0, "national");
  const tMerkez = K(1, "center");
  const [sp, ap] = pop(t, tMerkez + 0.1, 0.5);
  const aPanel = eout(ilerle(t, 0.05, 0.6));
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [60, 40, 1780], [170, 70, 1650])}>
        <Etiket t={t} bas={K(1, "garlic")} capa={[940, 440]} konum={[1230, 250]} metin="GARLIC" renk={RENK.altin} />
      </Kamera>
      <Panel a={aPanel} taraf="sol" genislik={900} opak={0.95} />
      <Baslik t={t} bas={0.2} metin="U.S. NIH" x={80} y={250} boyut={118} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNih + 0.2} metin="A CAREFUL LINE" x={80} y={355} boyut={64} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 80, top: 430, transform: `scale(${sp})`, transformOrigin: "0% 50%", opacity: ap }}>
        <Hap metin="NCCIH · NIH" renk={RENK.altin} boyut={30} />
      </div>
      <Baslik t={t} bas={K(1, "limited")} metin="LIMITED EVIDENCE" x={80} y={600} boyut={74} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "may")} metin="MAY REDUCE BP" x={80} y={700} boyut={74} renk={RENK.yesil} />
      <Baslik t={t} bas={K(1, "small")} metin="TO A SMALL EXTENT" x={80} y={800} boyut={74} renk={RENK.altin} />
    </>
  );
};

export default S16;

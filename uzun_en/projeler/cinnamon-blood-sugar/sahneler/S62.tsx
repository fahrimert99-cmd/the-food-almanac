// Sahne 62 — pratik öneriler: sağda liste paneli (hap kutusundaki sahte yazıyı da örter)
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])}>
        <Etiket t={t} bas={K(0, "quarter")} capa={[560, 330]} konum={[330, 150]} metin="¼ TSP" renk={RENK.altin} />
      </Kamera>
      <Panel a={p} taraf="sag" genislik={900} opak={1} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 740, background: RENK.kagit, opacity: p }} />
      <Baslik t={t} bas={0.2} metin="IN PRACTICE" x={1200} y={170} boyut={80} renk={RENK.lacivert} />
      <Liste t={t} x={1200} y={290} aralik={140} boyut={36} genislik={640} isaret="onay" ogeler={[
        { bas: K(0, "quarter"), metin: "¼ TSP IN COFFEE" },
        { bas: K(0, "Ceylon"), metin: "CEYLON IF YOU CAN" },
        { bas: K(0, "stacking"), metin: "NO STACKING SUPPLEMENTS", renk: RENK.mercan },
        { bas: K(0, "doctor"), metin: "ASK DOCTOR OR PHARMACIST", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S62;

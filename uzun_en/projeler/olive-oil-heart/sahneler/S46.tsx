// Sahne 46 — iyi desteklenenler: yağ değişimi (büyük çalışmalar) ve randomize çalışma.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(1, "And") - 0.2;
  const [sc, al] = pop(t, K(0, "olive oil"), 0.5);
  const [sk, ak] = pop(t, K(0, "lower"), 0.5);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={0.1} satirlar={s.meta.baslik!.satirlar} x={1860} y={150} boyut={96} hiza="sag" />
      <Liste t={t} isaret="carpi" boyut={34} x={1210} y={390} aralik={78} genislik={640}
        ogeler={[{ bas: K(0, "butter"), bitis: t2, metin: "BUTTER", renk: RENK.mercan },
          { bas: K(0, "margarine"), bitis: t2, metin: "MARGARINE", renk: RENK.mercan },
          { bas: K(0, "mayonnaise"), bitis: t2, metin: "MAYONNAISE", renk: RENK.mercan }]} />
      <div style={{ position: "absolute", left: 1210, top: 650, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * (t < t2 ? 1 : 0) }}>
        <Hap metin="→ OLIVE OIL" renk={RENK.yesil} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1210, top: 750, transform: `scale(${sk})`, transformOrigin: "0 50%", opacity: ak * (t < t2 ? 1 : 0) }}>
        <Hap metin="LOWER RISK · LARGE STUDIES" renk={RENK.altin} boyut={28} />
      </div>
      <Liste t={t} isaret="onay" boyut={32} x={1210} y={420} aralik={80} genislik={640}
        ogeler={[{ bas: K(1, "randomized trial"), metin: "ONE RANDOMIZED TRIAL" },
          { bas: K(1, "older Spanish"), metin: "OLDER SPANISH ADULTS" },
          { bas: K(1, "fewer heart"), metin: "FEWER HEART EVENTS" }]} />
      <Etiket t={t} bas={K(1, "Mediterranean")} capa={[330, 300]} konum={[760, 150]} metin="MEDITERRANEAN DIET" renk={RENK.yesil} boyut={26} />
    </>
  );
};

export default S46;

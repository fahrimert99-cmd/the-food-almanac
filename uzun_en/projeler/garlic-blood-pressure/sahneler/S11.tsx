// Sahne 11 — Ried 2016: 20 deney, 970 yetişkin; garlic vs placebo. Sağ panel, solda kavanozlar.
import React from "react";
import { INTER, BaslikBlok, Baslik, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const [s1, a1] = pop(t, K(1, "garlic"), 0.5);
  const [s2, a2] = pop(t, K(1, "placebo"), 0.5);
  const [sv, av] = pop(t, K(1, "placebo") - 0.1, 0.4);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [330, 60, 1500], [380, 80, 1420])} />
      <Panel a={pPanel} taraf="sag" genislik={900} opak={1} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "Ried")} />}
      <Baslik t={t} bas={K(0, "20")} metin="20 TRIALS" x={1860} y={250} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "970")} metin="970 ADULTS" x={1860} y={372} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "randomized")} metin="randomized trials" x={1860} y={455} hiza="sag" boyut={34} />
      <div style={{ position: "absolute", left: 1060, top: 640, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="GARLIC" renk={RENK.altin} boyut={34} /></div>
        <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.gri }}>VS</span>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="PLACEBO" renk={RENK.lacivert} boyut={34} /></div>
      </div>
      <Not t={t} bas={K(1, "dummy")} metin="placebo = a dummy pill" x={1860} y={730} hiza="sag" boyut={34} />
    </>
  );
};
export default S11;

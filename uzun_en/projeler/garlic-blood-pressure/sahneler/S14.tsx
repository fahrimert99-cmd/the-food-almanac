// Sahne 14 — Ried 2019: yalnızca hipertansiyon; 12 deney, 553 kişi. Sağ panel.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const [sc, al] = pop(t, K(0, "hypertension"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [380, 150, 1350], [330, 90, 1450])} />
      <Panel a={pPanel} taraf="sag" genislik={950} opak={1} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "2019")} />}
      <div style={{ position: "absolute", right: 60, top: 150, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="HYPERTENSION ONLY" renk={RENK.mercan} boyut={30} />
      </div>
      <Baslik t={t} bas={K(0, "2019")} bitis={K(1, "12")} metin="2019" x={1860} y={310} boyut={110} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={K(1, "12")} metin="12 TRIALS" x={1860} y={310} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "553")} metin="553 PEOPLE" x={1860} y={425} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(2, "eight")} vurgu={s.meta.baslik?.vurgu ?? "–8.3"} not="systolic" x={1380} y={560} genislik={320} boyut={100} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(2, "five")} vurgu="–5.5" not="diastolic" x={1720} y={560} genislik={320} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};
export default S14;

// Sahne 23 — Buffey 2022 derlemesi: 7 çalışma, hafif yürüyüş molaları glukoz + insülini düşürdü.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, Kamera, KaynakEtiketi, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; metin: string; renk: string; ok?: boolean }> = ({ t, bas, metin, renk, ok }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex", alignItems: "center", gap: 12 }}>
      {ok && <span style={{ width: 52, height: 52, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={34} renk="#fff" kalinlik={7} /></span></span>}
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.3, 0.7));
  const tUc = K(1, "2022");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [420, 80, 1400], [490, 140, 1290])} />
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "pooled") - 0.3} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={250} boyut={100} hiza="sag" />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Etiket t={t} bas={tUc} bitis={K(1, "found")} capa={[700, 420]} konum={[1060, 330]} metin="2022 REVIEW" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "seven")} bitis={K(1, "light") - 0.1} capa={[640, 560]} konum={[1060, 520]} metin="7 ONE-DAY STUDIES" renk={RENK.lacivert} />
      <div style={{ position: "absolute", right: 60, top: 520, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 22 }}>
        <Cip t={t} bas={K(1, "glucose")} metin="GLUCOSE LOWER" renk={RENK.yesil} ok />
        <Cip t={t} bas={K(1, "insulin")} metin="INSULIN LOWER" renk={RENK.yesil} ok />
        <Cip t={t} bas={K(1, "better")} metin="BETTER THAN STANDING" renk={RENK.altin} />
      </div>
    </>
  );
};

export default S23;

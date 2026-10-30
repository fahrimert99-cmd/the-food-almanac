// Sahne 21 — FRAX tahmini yoğunluktan; çalışma kırık değil yoğunluk ölçtü.
import React from "react";
import { INTER, BaslikBlok, Etiket, Hap, IkonYol, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840]);
  const tYog = K(0, "bone density"), tDiger = K(0, "other factors"), tDeney = K(1, "density"), tKirik = K(1, "not actual");
  const tCan = K(1, "cannot tell");
  const aF = sol(t, tDeney - 0.2, 0.4);
  const [s1, a1] = pop(t, tYog, 0.5), [s2, a2] = pop(t, tDiger, 0.5), [s3, a3] = pop(t, tDiger + 0.6, 0.5);
  const pil = (m: string, sc: number, al: number, renk: string) => (
    <div style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "0 50%" }}><Hap metin={m} renk={renk} boyut={26} /></div>
  );
  return (
    <>
      <Kamera gorsel="tam/21" pencere={pencere}>
        <Etiket t={t} bas={tYog} bitis={tDeney - 0.2} capa={[520, 620]} konum={[1180, 500]} metin="BONE DENSITY" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0, 0.6))} genislik={900} opak={0.6} />
      <div style={{ position: "absolute", left: 1040, top: 150, display: "flex", alignItems: "center", gap: 18, opacity: aF }}>
        {pil("BONE DENSITY", s1, a1, RENK.altin)}
        <span style={{ transform: `scale(${s2})`, opacity: a2, fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.lacivert }}>+</span>
        {pil("OTHER FACTORS", s2, a2, RENK.lacivert)}
      </div>
      <div style={{ position: "absolute", left: 1040, top: 240, display: "flex", alignItems: "center", gap: 18, opacity: aF * a3, transform: `scale(${s3})`, transformOrigin: "0 50%" }}>
        <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={40} renk={RENK.lacivert} kalinlik={7} /></span>
        <Hap metin="FRAX ESTIMATE" renk={RENK.koyuYesil} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={tDeney} satirlar={s.meta.baslik?.satirlar ?? []} x={1040} y={190} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tCan} metin="Cannot tell us whether prunes prevent fractures" x={1040} y={440} boyut={36} genislik={760} />
    </>
  );
};

export default S21;

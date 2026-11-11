// Sahne 23 — iki çalışma umut verici ama araştırma azı ve tutarsız.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  const tIki = K(0, "two randomized"), tFayda = K(0, "bone benefit"), tUmut = K(1, "encouraging");
  const tAz = K(2, "small body"), tTutarsiz = K(2, "not completely");
  const [sU, aU] = pop(t, tUmut, 0.55), [sT, aT] = pop(t, tTutarsiz, 0.55);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={pencere}>
        <Etiket t={t} bas={tAz} capa={[560, 430]} konum={[520, 240]} metin="SMALL BODY OF RESEARCH" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tAz + 1.5} />
      <Baslik t={t} bas={tIki} bitis={tAz - 0.3} metin="TWO TRIALS" x={150} y={170} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tFayda} bitis={tAz - 0.3} metin="BONE BENEFIT" x={150} y={260} boyut={100} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 150, top: 335, transform: `scale(${sU})`, transformOrigin: "0 50%", opacity: aU * (t < tAz - 0.3 ? 1 : 0) }}>
        <Hap metin="ENCOURAGING" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 860, transform: `translate(-50%, -50%) scale(${sT})`, opacity: aT }}>
        <Hap metin="RESULTS NOT COMPLETELY CONSISTENT" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S23;

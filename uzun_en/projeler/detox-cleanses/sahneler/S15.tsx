// Sahne 15 — dört soru
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tJ = K(0, "Journal"), tFour = K(0, "four plain");
  const t1 = K(1, "Are"), t2 = K(2, "What"), t3 = K(3, "Do"), t4 = K(4, "And");
  const pP = eout(ilerle(t, tFour - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tJ} />
      <Panel a={pP} taraf="sag" genislik={620} />
      <BaslikBlok t={t} bas={tFour} satirlar={s.meta.baslik?.satirlar ?? []} x={1360} y={230} boyut={92} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1350} y={450} aralik={110} boyut={32} genislik={520} ogeler={[
        { bas: t1, metin: "NECESSARY?", renk: RENK.lacivert },
        { bas: t2, metin: "WHAT'S INVOLVED?", renk: RENK.altin },
        { bas: t3, metin: "DO THEY WORK?", renk: RENK.yesil },
        { bas: t4, metin: "ARE THEY RISKY?", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S15;

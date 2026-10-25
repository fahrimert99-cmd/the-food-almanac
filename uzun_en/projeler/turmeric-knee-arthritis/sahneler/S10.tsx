// Sahne 10 — Tayland denemesi: katılımcılar.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSekiz = K(0, "eight"), tTay = K(0, "Thailand"), t367 = K(0, "367");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [140, 70, 1640])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.3} />}
      {/* 1. cümle: sekiz hastane, Tayland, 367 yetişkin */}
      <Baslik t={t} bas={tSekiz} bitis={3.7} metin="EIGHT HOSPITALS" x={900} y={230} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tTay} bitis={3.7} metin="THAILAND" x={900} y={345} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t367} bitis={6.9} vurgu="367" not="adults with knee osteoarthritis" x={1100} y={200} genislik={520} />
      {/* 2. cümle: katılımcı özellikleri */}
      <Liste t={t} x={880} y={190} aralik={104} boyut={40} isaret="nokta" genislik={640}
        ogeler={[
          { bas: K(1, "50"), metin: "50 OR OLDER", renk: RENK.altin },
          { bas: K(1, "average age"), metin: "AVERAGE AGE: ABOUT 60", renk: RENK.koyuYesil },
          { bas: K(1, "nine in ten"), metin: "ABOUT 9 IN 10 WOMEN", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S10;

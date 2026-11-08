// Sahne 6 — yapay tatlandırıcı nedir: başlık solda, dört ad sağda liste, stevia bitkisi etiketli.
import React from "react";
import { Baslik, Etiket, Kamera, Hap, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSure = K(0, "sweet") - 0.1;
  const [sc, al] = pop(t, K(0, "non-sugar"), 0.5);
  const aHap = al * sol(t, tSure, 0.4);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 100, 1920], [80, 140, 1760])}>
        <Etiket t={t} bas={K(1, "plant")- 0.6} capa={[1300, 765]} konum={[1480, 880]} metin="COMES FROM A PLANT" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: "non-sugar sweeteners" hapı, sonra başlık */}
      <div style={{ position: "absolute", left: 140, top: 150, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: aHap }}>
        <Hap metin="NON-SUGAR SWEETENERS" renk={RENK.altin} boyut={36} />
      </div>
      <Baslik t={t} bas={K(0, "sweet") - 0.1} metin="SWEET" x={130} y={150} boyut={116} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "no") - 0.3} metin="WITHOUT SUGAR" x={130} y={270} boyut={116} renk={RENK.koyuYesil} />
      {/* 2. cümle: dört ad */}
      <Liste t={t} x={1390} y={300} aralik={92} boyut={38} isaret="nokta" genislik={460} ogeler={[
        { bas: K(1, "aspartame"), metin: "ASPARTAME", renk: RENK.altin },
        { bas: K(1, "sucralose"), metin: "SUCRALOSE", renk: RENK.altin },
        { bas: K(1, "saccharin"), metin: "SACCHARIN", renk: RENK.altin },
        { bas: K(1, "stevia"), metin: "STEVIA", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S06;

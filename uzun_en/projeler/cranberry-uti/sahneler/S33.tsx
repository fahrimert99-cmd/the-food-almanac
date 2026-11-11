// S33 — suyun pratik sorunu: uyum ve bırakma
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProb = K(0, "practical problem"), tHard = K(1, "found it hard"), tAdh = K(2, "poor adherence"),
    tDrop = K(2, "dropouts"), tPreg = K(2, "pregnancy"), tVol = K(2, "volume");
  const [sc, al] = pop(t, tPreg, 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <Baslik t={t} bas={tProb - 0.2} bitis={3.7} metin="PRACTICAL" x={70} y={100} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tProb + 0.1} bitis={3.7} metin="PROBLEM" x={70} y={205} boyut={96} renk={RENK.mercan} />
      <Etiket t={t} bas={tHard} bitis={6.9} capa={[1190, 260]} konum={[1400, 120]} metin="HARD TO KEEP DRINKING" renk={RENK.mercan} />
      <Etiket t={t} bas={tAdh} bitis={9.4} capa={[805, 330]} konum={[330, 170]} metin="POOR ADHERENCE" renk={RENK.mercan} />
      <Etiket t={t} bas={tDrop} bitis={11.5} capa={[1420, 690]} konum={[1640, 860]} metin="DROPOUTS" renk={RENK.mercan} />
      {t >= tPreg && (
        <div style={{ position: "absolute", left: 600, top: 890, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="PREGNANCY TRIAL" renk={RENK.altin} boyut={30} />
        </div>
      )}
      <Etiket t={t} bas={tVol} capa={[1190, 520]} konum={[1660, 300]} metin="VOLUME OF JUICE" renk={RENK.altin} />
    </>
  );
};
export default S33;

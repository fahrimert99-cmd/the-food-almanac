// Sahne 19 — Ho et al. 2016: 58 çalışma, 3.974 katılımcı; medyan doz 3,5 g/gün, medyan 6 hafta.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAn = K(0, "analysis"), t58 = K(0, "58"), tNear = K(0, "nearly");
  const tDose = K(1, "dose"), tHalf = K(1, "three"), tSix = K(1, "six");
  const [s1, a1] = pop(t, tHalf, 0.5);
  const [s2, a2] = pop(t, tSix, 0.5);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tDose} capa={[390, 860]} konum={[650, 760]} metin="MEDIAN DOSE" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tAn} metin="2016 ANALYSIS" x={1100} y={180} boyut={44} renk={RENK.altin} font="inter" agirlik={800} aralik={4} />
      <Baslik t={t} bas={t58} metin={b.satirlar[0]} x={1096} y={280} boyut={120} renk={RENK.koyuYesil} />
      {b.vurgu && <VurguRozet t={t} bas={tNear} vurgu={b.vurgu} not={b.not} x={1290} y={400} genislik={420} />}
      <div style={{ position: "absolute", left: 1100, top: 690, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="3.5 G / DAY" renk={RENK.yesil} boyut={40} />
      </div>
      <div style={{ position: "absolute", left: 1100, top: 790, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
        <Hap metin="6 WEEKS" renk={RENK.altin} boyut={40} />
      </div>
    </>
  );
};

export default S19;

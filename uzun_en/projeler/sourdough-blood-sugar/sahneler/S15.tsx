// Sahne 15 — 8 saat (ekşi maya) ve 2 saat (ticari maya) mayalanma; örnekler 3 saat alındı.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X0 = 1000, UZ = 800; // çubuk başlangıcı ve 8 saatin uzunluğu (2 saat = UZ/4)

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t8 = K(0, "eight"), t2 = K(0, "two"), t3 = K(1, "three");
  const p1 = eout(ilerle(t, t8, 1.4)), p2 = eout(ilerle(t, t2, 0.6));
  const [sc, al] = pop(t, K(1, "samples"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1760])}>
        <Etiket t={t} bas={K(0, "sourdough")} bitis={t8 + 1.5} capa={[370, 660]} konum={[760, 520]} metin="SOURDOUGH DOUGH" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "baker's")} bitis={c[1].bas - 0.1} capa={[650, 950]} konum={[800, 760]} metin="BAKER'S YEAST" renk={RENK.lacivert} />
      </Kamera>
      {/* çubuklar */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {p1 > 0 && <rect x={X0} y={300} width={UZ * p1} height={26} rx={13} fill={RENK.altin} />}
        {p2 > 0 && <rect x={X0} y={560} width={UZ / 4 * p2} height={26} rx={13} fill={RENK.lacivert} />}
      </svg>
      <Baslik t={t} bas={t8} metin="8 HOURS" x={X0} y={215} boyut={120} renk={RENK.altin} />
      <Not t={t} bas={K(0, "lactobacilli")} x={X0 + 4} y={346} metin="SOURDOUGH · lactobacilli and yeast" boyut={32} agirlik={800} renk={RENK.lacivert} />
      <Baslik t={t} bas={t2} metin="2 HOURS" x={X0} y={475} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "baker's")} x={X0 + 4} y={606} metin="BAKER'S YEAST" boyut={32} agirlik={800} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: X0 - 4, top: 760, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="SAMPLES TAKEN FOR 3 HOURS" renk={RENK.koyuYesil} boyut={32}
          style={{ opacity: 1 }} />
      </div>
      <div style={{ position: "absolute", left: X0 + 650, top: 762, opacity: eout(ilerle(t, t3, 0.4)) }}>
        <IkonYol ad="saat" boyut={54} renk={RENK.koyuYesil} />
      </div>
    </>
  );
};

export default S15;

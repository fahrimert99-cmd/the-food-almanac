// Sahne 13 — 16 makale, hepsi kan yağlarını ölçtü; ana karşılaştırma tropik olmayan bitkisel yağlar.
import React from "react";
import { AltSis, Baslik, Hap, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sB, aB] = pop(t, K(0, "measured"), 0.5);
  const aBit = 1 - eout(ilerle(t, c[1].bas - 0.1, 0.4));
  const [sK, aK] = pop(t, K(1, "comparison"), 0.5);
  const [sV, aV] = pop(t, K(1, "against"), 0.5);
  const [sN, aN] = pop(t, K(1, "vegetable") - 0.1, 0.5);
  const kutu = (sc: number, al: number, ad: React.ReactNode) => (
    <div style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "100% 50%" }}>{ad}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [30, 90, 1830])} />
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={920} />
      <AltSis a={0.7} yukseklik={150} />
      <Baslik t={t} bas={K(0, "Sixteen")} metin={s.meta.baslik?.satirlar[0] ?? "16 TRIALS"} x={1860} y={200} boyut={130} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "qualified")} metin={s.meta.baslik?.not ?? ""} x={1860} y={290} hiza="sag" boyut={36} agirlik={800} />
      <div style={{ position: "absolute", right: 60, top: 420, opacity: aBit }}>
        {kutu(sB, aB, <Hap metin="ALL MEASURED BLOOD FATS" renk={RENK.mercan} boyut={34} />)}
      </div>
      <div style={{ position: "absolute", right: 60, top: 560, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 18 }}>
        {kutu(sK, aK, <Hap metin="COCONUT OIL" renk={RENK.altin} boyut={36} />)}
        {kutu(sV, aV, <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, color: RENK.gri }}>VS</span>)}
        {kutu(sN, aN, <Hap metin="NON-TROPICAL VEGETABLE OILS" renk={RENK.yesil} boyut={36} />)}
      </div>
    </>
  );
};

export default S13;

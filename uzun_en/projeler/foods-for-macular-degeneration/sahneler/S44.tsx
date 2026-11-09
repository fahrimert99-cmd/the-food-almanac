// Sahne 44 — basamaklar: kan lutein düzeyi ≠ sağlıklı göz; kanıt yok; basamak taşı.
import React from "react";
import { INTER, Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "No"), tC = K(2, "Blood");
  const fA = (bas: number, bit: number) => eout(ilerle(t, bas, 0.45)) * (1 - eout(ilerle(t, bit, 0.4)));
  const [sx, ax] = pop(t, K(0, "isn't"), 0.5);
  const [s1, a1] = pop(t, K(0, "higher"), 0.5);
  const [s2, a2] = pop(t, K(0, "healthier"), 0.5);
  const gA = 1 - eout(ilerle(t, tB - 0.1, 0.4));
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1820])} />
      {/* A: iki hap arasında ≠ */}
      <div style={{ position: "absolute", left: 1500, top: 200, transform: "translateX(-50%)", opacity: gA, display: "flex",
        flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="HIGHER BLOOD LUTEIN" renk={RENK.altin} boyut={32} /></div>
        <div style={{ transform: `scale(${sx})`, opacity: ax, fontFamily: INTER, fontWeight: 800, fontSize: 120, lineHeight: 1.1, color: RENK.mercan }}>≠</div>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="HEALTHIER EYES" renk={RENK.yesil} boyut={32} /></div>
      </div>
      {/* B: kanıt yok */}
      <div style={{ opacity: fA(tB, tC - 0.1) }}>
        <Ikon t={t} bas={tB} ad="carpi" x={1250} y={300} zemin={RENK.mercan} boyut={96} />
        <Baslik t={t} bas={tB + 0.1} metin="NO TRIAL HAS SHOWN" x={1320} y={300} boyut={68} renk={RENK.lacivert} />
        <Not t={t} bas={K(1, "eating")} metin="that eating eggs or spinach prevents macular degeneration" x={1250} y={370} genislik={580} boyut={38}
          agirlik={700} />
      </div>
      {/* C: basamak taşı */}
      <BaslikBlok t={t} bas={K(2, "stepping")} satirlar={s.meta.baslik!.satirlar} x={1860} y={300} boyut={120} hiza="sag" />
      <Etiket t={t} bas={tC} capa={[560, 500]} konum={[1020, 560]} metin="BLOOD LEVELS" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "finish")} capa={[330, 140]} konum={[840, 110]} metin="NOT THE FINISH LINE" renk={RENK.mercan} />
    </>
  );
};

export default S44;

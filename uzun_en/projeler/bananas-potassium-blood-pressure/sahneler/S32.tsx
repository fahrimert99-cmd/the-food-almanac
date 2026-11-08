// Sahne 32 — "büyük sonuç, ama sodyum da azaldı". Görseldeki "O2" yazısı ve noktalı çizgi kâğıt yamalarıyla örtülür.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const KAGIT_GORSEL = "rgb(251,251,227)";
// noktalı çizgi boyunca (833,753) -> (1120,487) yamalar + "O2" yazısı
const YAMALAR: [number, number, number][] = [
  ...Array.from({ length: 8 }, (_, i): [number, number, number] => [833 + (287 * i) / 7, 753 - (266 * i) / 7, 46]),
  [1165, 452, 80],
];

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRct = K(0, "randomized"), tNa = K(1, "sodium"), tK = K(1, "potassium"), tBoth = K(2, "Both");
  const bit1 = tBoth - 0.1;
  const bit0 = s.cumleler[1].bas - 0.1;
  const [sc, al] = pop(t, K(1, "cannot"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        {YAMALAR.map(([x, y, r], i) => (
          <div key={i} style={{ position: "absolute", left: x - r, top: y - r, width: 2 * r, height: 2 * r, borderRadius: "50%",
            background: `radial-gradient(circle, ${KAGIT_GORSEL} 0%, ${KAGIT_GORSEL} 60%, rgba(251,251,227,0) 100%)` }} />
        ))}
      </Kamera>
      <KaynakEtiketi t={t} metin="Neal et al. · N Engl J Med · 2021" />
      <Baslik t={t} bas={K(0, "large")} bitis={bit0} metin="A LARGE RESULT" x={960} y={170} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tRct} bitis={bit0} metin="RANDOMIZED TRIAL" x={960} y={285} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={tNa} bitis={bit1} capa={[480, 560]} konum={[760, 300]} metin="LESS SODIUM" renk={RENK.lacivert} boyut={30} />
      <Etiket t={t} bas={tK} bitis={bit1} capa={[880, 800]} konum={[1000, 960 - 130]} metin="ADDED POTASSIUM" renk={RENK.altin} boyut={30} />
      <div style={{ position: "absolute", left: 680, top: 410, transform: `scale(${sc})`, opacity: al * sol(t, bit1), transformOrigin: "50% 50%" }}>
        <Hap metin="HOW MUCH FROM POTASSIUM?" renk={RENK.mercan} boyut={30} />
      </div>
      <Baslik t={t} bas={tBoth} metin="BOTH MAY" x={960} y={150} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tBoth + 0.18} metin="HAVE HELPED" x={960} y={270} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S32;

// Sahne 12 — sonuç: iki grupta benzer skorlar (şematik, sayısız), 6 dakika yürüyüş.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const SATIRLAR = [
  { ad: "TURMERIC EXTRACT", renk: RENK.altin, y: 400 },
  { ad: "IBUPROFEN", renk: RENK.lacivert, y: 500 },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBar = K(1, "turmeric"), tNot = K(1, "not worse");
  const [s1, a1] = pop(t, K(0, "pain"), 0.5);
  const [s2, a2] = pop(t, K(0, "daily-function"), 0.5);
  const [s3, a3] = pop(t, tNot, 0.5);
  const aBar = sol(t, 9.3);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 30, 1800], [20, 80, 1700])}>
        <Etiket t={t} bas={K(2, "walk")} capa={[560, 740]} konum={[1330, 560]} metin="6-MINUTE WALK" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "very")} satirlar={["ABOUT THE", "SAME"]} x={1860} y={170} boyut={96} hiza="sag" />
      {/* 1. cümle: ölçülen iki sonuç */}
      <div style={{ opacity: sol(t, 4.7) }}>
        <div style={{ position: "absolute", left: 1300, top: 400, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
          <Hap metin="PAIN SCORES" renk={RENK.mercan} boyut={32} />
        </div>
        <div style={{ position: "absolute", left: 1300, top: 490, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
          <Hap metin="DAILY FUNCTION" renk={RENK.yesil} boyut={32} />
        </div>
      </div>
      {/* 2. cümle: eşit çubuklar (şematik) */}
      <div style={{ opacity: aBar }}>
        {SATIRLAR.map((r, i) => {
          const p = eout(ilerle(t, tBar + i * 0.5, 0.9));
          return (
            <div key={r.ad} style={{ position: "absolute", left: 1260, top: r.y, opacity: eout(ilerle(t, tBar + i * 0.5 - 0.2, 0.4)) }}>
              <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>{r.ad}</div>
              <div style={{ marginTop: 8, height: 38, width: 520 * p, borderRadius: 10, background: r.renk }} />
            </div>
          );
        })}
        <div style={{ position: "absolute", left: 1260, top: 610, transform: `scale(${s3})`, transformOrigin: "0 50%", opacity: a3 }}>
          <Hap metin="NOT WORSE" renk={RENK.yesil} boyut={32} />
        </div>
        <div style={{ position: "absolute", left: 1260, top: 690, opacity: a3, fontFamily: INTER, fontWeight: 700, fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
      </div>
      <Ikon t={t} bas={K(2, "six")} ad="saat" x={1260} y={450} boyut={84} zemin={RENK.lacivert} />
    </>
  );
};

export default S12;

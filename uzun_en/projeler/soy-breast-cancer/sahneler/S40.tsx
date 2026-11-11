// Sahne 40 — ılımlı etki, değişken denemeler, süre
import React from "react";
import { Baslik, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; x: number; y: number; w: number; h: number }> = ({ t, bas, x, y, w, h }) => {
  const a = eout(ilerle(t, bas, 0.5));
  return <div style={{ position: "absolute", left: x, top: y, width: w, height: h, opacity: 0.95 * a, background: RENK.kagit,
    borderRadius: 24, border: `3px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.2)" }} />;
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tModest = K(0, "modest"), tVar = K(0, "varied"), tClear = K(0, "clear benefit"), tLittle = K(0, "very little");
  const tSure = K(1, "lasted");
  const aBar = eout(ilerle(t, tClear, 1.2));
  const [sA, aA] = pop(t, tClear, 0.5), [sB, aB] = pop(t, tLittle, 0.5);
  const aSure = eout(ilerle(t, tSure, 0.6));
  const aOk = eout(ilerle(t, K(1, "six") + 0.1, 0.9));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])} />
      {/* sol üst kart: ılımlı etki + değişken denemeler */}
      <Kart t={t} bas={tModest - 0.1} x={50} y={40} w={800} h={340} />
      <Baslik t={t} bas={tModest} metin="MODEST EFFECT" x={90} y={120} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tVar} metin="TRIALS VARIED A LOT" x={92} y={212} boyut={40} renk={RENK.lacivert} font="inter" agirlik={800} />
      {/* iki uçlu çubuk: açık fayda ↔ çok az (şematik) */}
      <div style={{ position: "absolute", left: 92, top: 262, width: 716, height: 18, borderRadius: 9, opacity: aBar,
        background: `linear-gradient(to right, ${RENK.yesil}, #C9C6B6)` }} />
      <div style={{ position: "absolute", left: 92, top: 300, transform: `scale(${sA})`, transformOrigin: "0% 50%", opacity: aA,
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil }}>CLEAR BENEFIT</div>
      <div style={{ position: "absolute", right: 1920 - 808, top: 300, transform: `scale(${sB})`, transformOrigin: "100% 50%", opacity: aB,
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.gri }}>VERY LITTLE</div>
      {/* sağ üst kart: tedavi süresi */}
      <Kart t={t} bas={tSure - 0.1} x={1010} y={140} w={860} h={230} />
      <Baslik t={t} bas={tSure} metin="TREATMENT LASTED" x={1050} y={190} boyut={34} renk={RENK.gri} font="inter" agirlik={800} aralik={3} />
      <Baslik t={t} bas={K(1, "six")} metin="6 WEEKS" x={1050} y={270} boyut={74} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "a year")} metin="1 YEAR" x={1840} y={270} boyut={74} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", left: 1330, top: 262, width: 220 * aOk, height: 6, borderRadius: 3, background: RENK.altin, opacity: aSure }} />
    </>
  );
};

export default S40;

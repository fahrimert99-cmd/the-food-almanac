// Sahne 8 — NOVA grup 3 ve 4: etiketler, sonra grup 4 kapanış kartı.
import React from "react";
import { ANTON, AbsoluteFill, Baslik, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const g4 = c[1].bas;
  const pOrtu = eout(ilerle(t, g4 - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [110, 70, 1740])}>
        <Etiket t={t} bas={K(0, "salt,")} bitis={g4 - 0.1} capa={[455, 770]} konum={[330, 410]} metin="SALT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "canned beans")} bitis={g4 - 0.1} capa={[900, 520]} konum={[1180, 190]} metin="CANNED BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cheese")} bitis={g4 - 0.1} capa={[1280, 700]} konum={[1460, 880]} metin="CHEESE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "fresh bread")} bitis={g4 - 0.1} capa={[1520, 480]} konum={[1680, 270]} metin="FRESH BREAD" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "three")} bitis={g4 - 0.1} metin="GROUP 3" x={70} y={100} boyut={96} renk={RENK.altin} />
      <Not t={t} bas={K(0, "processed")} bitis={g4 - 0.1} metin="PROCESSED FOOD" x={74} y={170} boyut={30} agirlik={800} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 74, top: 230, display: "flex", gap: 14, opacity: 1 - pOrtu }}>
        {[["+ SALT", "salt,"], ["+ SUGAR", "sugar"], ["+ OIL", "oil"]].map(([m, f]) => {
          const [sc, al] = pop(t, K(0, f), 0.45);
          return (
            <div key={m} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
              borderRadius: 999, padding: "6px 22px", fontFamily: ANTON, fontSize: 36, letterSpacing: 2, color: RENK.lacivert }}>{m}</div>
          );
        })}
      </div>
      {/* grup 4: görseli soldur, ortada kapanış */}
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: 0.94 * pOrtu }} />
      <Baslik t={t} bas={K(1, "four")} metin="GROUP 4" x={960} y={400} boyut={150} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={K(1, "ultra-processed")} metin="ULTRA-PROCESSED" x={960} y={580} boyut={130} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 660, width: 600, top: 670, height: 6, background: RENK.mercan,
        transform: `scaleX(${eout(ilerle(t, K(1, "ultra-processed") + 0.3, 0.6))})` }} />
    </>
  );
};

export default S08;

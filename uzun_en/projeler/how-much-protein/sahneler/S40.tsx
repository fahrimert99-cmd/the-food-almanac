// Sahne 40 — öğün başına 25–30 g; günde 75–90 g.
import React from "react";
import { BaslikBlok, Kamera, Not, RENK, SP, ANTON, INTER, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYeni = K(1, "That's") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [20, 0, 1900], [70, 50, 1780])} />
      <BaslikBlok t={t} bas={K(0, "tidy")} bitis={tYeni} satirlar={["25–30 G", "PER MEAL"]} x={1860} y={230} boyut={112} hiza="sag" />
      {[0, 1, 2].map((i) => {
        const [sc, al] = pop(t, K(0, ["each", "of three", "meals"][i]) + (i === 0 ? 0.1 : 0.0), 0.5);
        const a = al * sol(t, tYeni);
        if (a <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 1300 + i * 190, top: 520, width: 160, height: 160, borderRadius: "50%",
            background: "#FCF8EC", border: `5px solid ${RENK.yesil}`, transform: `scale(${sc})`, opacity: a, display: "flex",
            flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.lacivert }}>MEAL</div>
            <div style={{ fontFamily: ANTON, fontSize: 70, lineHeight: 1, color: RENK.yesil }}>{i + 1}</div>
          </div>
        );
      })}
      <VurguRozet t={t} bas={K(1, "75")} vurgu="75–90 G" not="a day" x={1520} y={290} genislik={480} />
      <Not t={t} bas={K(1, "PROT-AGE")} metin="close to the PROT-AGE range for a 170 lb person" x={1860} y={560} hiza="sag" genislik={640} />
    </>
  );
};

export default S40;

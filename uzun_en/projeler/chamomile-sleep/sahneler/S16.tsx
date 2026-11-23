// Sahne 16 — üç anahtar = üç neden; sağda her neden için karşılaştırma sırası.
import React from "react";
import { ANTON, BaslikBlok, Hap, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// anahtar halkaları (görsel koordinatı) — numara rozeti
const ANAHTAR: [number, number][] = [[290, 545], [435, 530], [790, 635]];

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "disagree");
  const satirlar = [
    { bas: K(2, "everyday"), a: "EVERYDAY POOR SLEEP", b: "LONG-TERM INSOMNIA", tb: K(2, "long-term"), renk: RENK.altin },
    { bas: K(3, "sleep quality"), a: "SLEEP QUALITY", b: "DIARY MINUTES", tb: K(3, "diary minutes"), renk: RENK.koyuYesil },
    { bas: K(4, "34"), a: "34 PEOPLE", b: "VERY FEW", tb: K(4, "very few"), renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [110, 90, 1560], [150, 110, 1470])}>
        {ANAHTAR.map(([x, y], i) => {
          const [sc, al] = pop(t, satirlar[i].bas, 0.5);
          return (
            <div key={i} style={{ position: "absolute", left: x - 30, top: y - 30, width: 60, height: 60, borderRadius: "50%",
              background: satirlar[i].renk, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 36, transform: `scale(${sc})`, opacity: al, border: `3px solid ${RENK.kagitAcik}` }}>{i + 1}</div>
          );
        })}
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={["WHY THEY", "DISAGREED"]} x={1130} y={120} boyut={92} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {satirlar.map((r, i) => {
        const y = 520 + i * 135;
        const [s1, a1] = pop(t, r.bas, 0.5);
        const [sv, av] = pop(t, r.tb - 0.25, 0.4);
        const [s2, a2] = pop(t, r.tb, 0.5);
        return (
          <div key={i} style={{ position: "absolute", left: 990, top: y, display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
              <Hap metin={r.a} renk={r.renk} boyut={22} />
            </div>
            <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.gri }}>VS</span>
            <div style={{ transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
              <Hap metin={r.b} renk={r.renk} boyut={22} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default S16;

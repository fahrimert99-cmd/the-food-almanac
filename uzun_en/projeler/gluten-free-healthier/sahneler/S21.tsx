// Sahne 21 — Gözlemsel çalışma sınırları: defter sayfasındaki bozuk yazıyı örten not kartı + gözlük etiketi.
import React from "react";
import { Etiket, ANTON, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.1, 0.6);
  const satirlar = [
    { m: "OBSERVATIONAL STUDY", bas: K(0, "observational"), renk: RENK.lacivert },
    { m: "LINKS, NOT PROOF", bas: K(1, "links"), renk: RENK.koyuYesil },
    { m: "SELF-REPORTED DIETS", bas: K(2, "own diets"), renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1790])}>
        {/* bozuk yazıyı örten kâğıt not kartı */}
        <div style={{ position: "absolute", left: 470, top: 360, width: 930, height: 360, opacity: al, transform: `rotate(-1.5deg) scale(${sc})`,
          background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 20, boxShadow: "0 14px 34px rgba(48,40,34,0.30)" }} />
        {satirlar.map((r, k) => {
          const a = eout(ilerle(t, r.bas, 0.5));
          return (
            <div key={k} style={{ position: "absolute", left: 520, top: 392 + k * 108, opacity: a, display: "flex", alignItems: "center", gap: 22,
              transform: `rotate(-1.5deg) translateX(${(1 - a) * -30}px)` }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: r.renk }} />
              <span style={{ fontFamily: ANTON, fontSize: 68, lineHeight: "90px", color: r.renk, whiteSpace: "nowrap" }}>{r.m}</span>
            </div>
          );
        })}
        <Etiket t={t} bas={K(2, "nurses")} capa={[1180, 230]} konum={[1540, 150]} metin="HEALTH PROFESSIONALS" renk={RENK.altin} boyut={26} />
      </Kamera>
    </>
  );
};

export default S21;

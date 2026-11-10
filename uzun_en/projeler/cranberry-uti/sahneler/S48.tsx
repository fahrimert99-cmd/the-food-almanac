// Sahne 48 — Fikir 1: hangi grupta olduğunu sor (sol üst rozet + sağ üstte onaylı gruplar).
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Rozet: React.FC<{ t: number; bas: number; no: number }> = ({ t, bas, no }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 70, top: 70, width: 92, height: 92, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60,
      transform: `scale(${sc})`, opacity: al, border: `5px solid ${RENK.kagitAcik}` }}>{no}</div>
  );
};

const GRUPLAR = [
  { ifade: "women", metin: "WOMEN, RECURRENT UTIs" },
  { ifade: "children", metin: "CHILDREN" },
  { ifade: "after a bladder", metin: "AFTER BLADDER PROCEDURES" },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  const tGrup = K(1, "group");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={pencere}>
        <Etiket t={t} bas={K(2, "doctor")} capa={[1560, 640]} konum={[1500, 860]} metin="YOUR DOCTOR" renk={RENK.altin} boyut={30} />
      </Kamera>
      <Rozet t={t} bas={0.05} no={1} />
      <Baslik t={t} bas={tGrup - 0.1} metin="CHECK YOUR" x={190} y={106} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={tGrup + 0.05} metin="GROUP" x={190} y={176} boyut={64} renk={RENK.koyuYesil} />
      {GRUPLAR.map((g, i) => {
        const bas = K(1, g.ifade), p = eout(ilerle(t, bas, 0.5));
        const a = p * sol(t, 1e9);
        if (a <= 0) return null;
        return (
          <div key={g.ifade} style={{ position: "absolute", right: 56, top: 100 + i * 96, opacity: a, transform: `translateX(${(1 - p) * 50}px)`,
            display: "flex", alignItems: "center", gap: 16, background: "#FCF8EC", border: `4px solid ${RENK.yesil}`, borderRadius: 999,
            padding: "10px 30px 10px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad="onay" boyut={32} renk="#fff" />
            </span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.lacivert, whiteSpace: "nowrap" }}>{g.metin}</span>
          </div>
        );
      })}
    </>
  );
};

export default S48;

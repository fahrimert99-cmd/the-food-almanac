// Sahne 35 — Nazik, belirsiz bir yardımcı; uyku hapı değil. Papatya tarlasında üstte boş kâğıt alanına yazılar.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const HapP: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGentle = K(0, "gentle,");
  const tNot = K(0, "not a mild");
  const tTrials = K(1, "small shifts");
  const tKo = K(1, "knockout");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "chamomile")} bitis={tTrials - 0.2} capa={[1000, 470]} konum={[1000, 330]} metin="CHAMOMILE TEA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tGentle} bitis={tTrials - 0.1} metin="GENTLE, UNCERTAIN HELPER" x={960} y={120} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <HapP t={t} bas={tNot} bitis={tTrials - 0.1} x={960} y={225} metin="NOT A SLEEPING PILL" renk={RENK.mercan} />
      <Baslik t={t} bas={tTrials} metin="SMALL SHIFTS" x={960} y={120} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <HapP t={t} bas={tKo} x={960} y={225} metin="NOT KNOCKOUT EFFECTS" renk={RENK.mercan} />
    </>
  );
};

export default S35;

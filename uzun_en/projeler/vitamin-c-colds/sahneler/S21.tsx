// Sahne 21 — çalışmalarda her gün alınır; biz ise boğaz kaşınınca. Duvar boşluklarında iki kart.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; w: number; ust: string; ana: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, w, ust, ana, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, transform: `scale(${sc})`, transformOrigin: "0% 0%", opacity: a, background: RENK.kagitAcik,
      border: `4px solid ${renk}`, borderRadius: 22, padding: "10px 22px 14px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 3, color: renk }}>{ust}</div>
      <div style={{ fontFamily: ANTON, fontSize: 58, lineHeight: 1.1, color: RENK.lacivert }}>{ana}</div>
    </div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDay = K(1, "every day"), tUs = K(2, "most of us"), tReach = K(3, "reach for");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Kart t={t} bas={tDay} bitis={tUs - 0.1} x={330} y={112} w={600} ust="IN THE TRIALS" ana="EVERY DAY, BEFORE ANY COLD" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tUs} capa={[330, 450]} konum={[330, 880]} metin="MOST OF US" renk={RENK.altin} />
      <Kart t={t} bas={tReach} x={1310} y={112} w={330} ust="WE REACH FOR IT ONCE" ana="THE THROAT STARTS TO SCRATCH" renk={RENK.mercan} />
    </>
  );
};

export default S21;

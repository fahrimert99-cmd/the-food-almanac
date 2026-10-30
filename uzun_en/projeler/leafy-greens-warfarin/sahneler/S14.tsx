// Sahne 14 — tabakta yeşillikler: en büyük "salınım" etkeni ama yasak değil.
import React from "react";
import { Etiket, Hap, Ikon, Kamera, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Zeminli yazı kartı (ekran koordinatı)
const Kart: React.FC<{ t: number; bas: number; bitis?: number; satirlar: string[]; renkler: string[] }> = ({ t, bas, bitis = 1e9, satirlar, renkler }) => {
  const p = eout(ilerle(t, bas, 0.5)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1290, top: 610, width: 440, padding: "18px 24px 22px", opacity: a,
      transform: `translateY(${(1 - p) * 20}px)`, background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, borderRadius: 24,
      boxShadow: "0 10px 26px rgba(48,40,34,0.22)" }}>
      {satirlar.map((m, i) => (
        <div key={i} style={{ fontFamily: ANTON, fontSize: 66, lineHeight: 1.1, color: renkler[i] }}>{m}</div>
      ))}
    </div>
  );
};

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSwing = K(1, "biggest"), tNot = K(2, "isn't");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "greens")} bitis={tSwing} capa={[680, 520]} konum={[620, 120]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "warfarin.")} bitis={tSwing} capa={[1400, 300]} konum={[1250, 110]} metin="WARFARIN" renk={RENK.mercan} />
      </Kamera>
      <Kart t={t} bas={tSwing} bitis={tNot - 0.1} satirlar={["BIGGEST", "SWING", "FACTOR"]} renkler={[RENK.lacivert, RENK.mercan, RENK.lacivert]} />
      <Kart t={t} bas={tNot} satirlar={["NOT A", "FORBIDDEN", "FOOD"]} renkler={[RENK.lacivert, RENK.koyuYesil, RENK.lacivert]} />
      <Ikon t={t} bas={tNot + 0.3} ad="onay" x={1700} y={600} boyut={84} />
    </>
  );
};

export default S14;

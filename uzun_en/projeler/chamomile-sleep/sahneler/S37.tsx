// Sahne 37 — BÖLÜM 7: ısıtan fincan. HERB OR RITUAL? başlığı, rutin maddeleri, bitişte HERB vs HABIT.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHerb = K(2, "herb"), tHabit = K(2, "habit");
  const [s1, a1] = pop(t, tHerb, 0.5);
  const [s2, a2] = pop(t, tHabit, 0.5);
  const hap = (renk: string): React.CSSProperties => ({ display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
    background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 30px 10px 18px", fontFamily: INTER,
    fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" });
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 20, 1800])}>
        <Etiket t={t} bas={K(0, "warm cup")} bitis={K(1, "warm mug")} capa={[700, 620]} konum={[1010, 620]} metin="WARM CUP" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.4} satirlar={["HERB OR", "RITUAL?"]} x={1470} y={210} boyut={124} hiza="orta" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "routine:")} metin="THE ROUTINE" x={1060} y={500} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={1060} y={548} aralik={86} boyut={36} isaret="sayi" genislik={780} ogeler={[
        { bas: K(1, "warm mug,"), metin: "A WARM MUG", renk: RENK.altin },
        { bas: K(1, "slower"), metin: "A SLOWER EVENING", renk: RENK.altin },
        { bas: K(1, "same time"), metin: "SAME TIME EACH NIGHT", renk: RENK.altin },
      ]} />
      <div style={{ position: "absolute", left: 1470, top: 880, transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ ...hap(RENK.yesil), transform: `scale(${s1})`, opacity: a1 }}>HERB</div>
        <span style={{ opacity: a2, fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.gri }}>OR</span>
        <div style={{ ...hap(RENK.altin), transform: `scale(${s2})`, opacity: a2 }}>HABIT</div>
      </div>
    </>
  );
};

export default S37;

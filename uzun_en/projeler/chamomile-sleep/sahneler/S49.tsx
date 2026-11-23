// Sahne 49 — İpucu 2: adil bir deneme (2–4 hafta).
import React from "react";
import { Baslik, Kamera, Liste, RENK, SP, INTER, ANTON, kameraYolu, kelimeZamani, kagit, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFair = K(1, "fair test"), tTwo = K(2, "two"), tFour = K(2, "four"), tPay = K(3, "Pay attention");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1750]);
  const bit = tPay - 0.2;
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kam} />
      {/* takvimdeki sahte yazıları örten kâğıt panel */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1180,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 86%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={0.0} metin="2." x={140} y={170} boyut={130} renk={RENK.altin} />
      <Baslik t={t} bas={tFair} metin="FAIR TEST" x={330} y={170} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={tTwo} bitis={bit} metin="2–4 WEEKS" x={140} y={370} boyut={120} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 140, top: 470, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n) => {
          const b = n <= 2 ? tTwo + 0.2 * (n - 1) : tFour + 0.2 * (n - 3);
          const [sc, al] = pop(t, b, 0.45);
          const a = al * (t < bit ? 1 : Math.max(0, 1 - (t - bit) / 0.4));
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: a, width: 190, height: 110, borderRadius: 16,
              background: RENK.kagitAcik, border: `4px solid ${n <= 2 ? RENK.yesil : RENK.altin}`, display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 28,
              letterSpacing: 2, color: RENK.lacivert }}>WEEK {n}</div>
          );
        })}
      </div>
      <Liste t={t} x={140} y={340} aralik={120} boyut={40} isaret="onay" genislik={900} ogeler={[
        { bas: tPay, metin: "NOTE HOW YOU SLEEP" },
        { bas: K(3, "couple of weeks"), metin: "FOR A COUPLE OF WEEKS", renk: RENK.altin },
        { bas: K(4, "nothing changes"), metin: "NO CHANGE? MOVE ON", renk: RENK.lacivert },
      ]} />
    </>
  );
};
export default S49;

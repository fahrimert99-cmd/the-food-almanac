// Özet: saati say; üç kural kartı buzdolabı kapağında belirir.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KURALLAR = [
  { ifade: "Two hours", sayi: "2 HOURS", not: "OUT AT MOST", renk: RENK.mercan },
  { ifade: "three to four days", sayi: "3–4 DAYS", not: "IN THE REFRIGERATOR", renk: RENK.koyuYesil },
  { ifade: "165", sayi: "165°F", not: "WHEN YOU REHEAT", renk: RENK.altin },
];

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tClock = K(0, "respect the clock");
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [20, 20, 1850], [60, 40, 1760])}>
        {/* saat kadranındaki küçük sahte yazıyı örter */}
        <div style={{ position: "absolute", left: 480, top: 500, width: 110, height: 44,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #EFE6D2 0%, #EFE6D2 60%, rgba(239,230,210,0) 100%)" }} />
        <Etiket t={t} bas={tClock} capa={[540, 700]} konum={[330, 900]} metin="RESPECT THE CLOCK" renk={RENK.altin} />
        {KURALLAR.map((k, i) => {
          const [sc, al] = pop(t, K(1, k.ifade) - 0.05, 0.55);
          return (
            <div key={k.sayi} style={{ position: "absolute", left: 1060, top: 140 + i * 190, width: 500, height: 160, opacity: al,
              transform: `scale(${sc})`, background: "#FCF8EC", border: `4px solid ${k.renk}`, borderRadius: 22,
              boxShadow: "0 10px 26px rgba(48,40,34,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: ANTON, fontSize: 84, lineHeight: 1.05, color: k.renk }}>{k.sayi}</div>
              <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>{k.not}</div>
            </div>
          );
        })}
      </Kamera>
    </>
  );
};

export default S58;

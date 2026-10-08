// Sahne 43 — Bedava, zahmetsiz bir alışkanlık; iyi bir öğünü biraz daha iyi çalıştırır. Sihirli numara değil.
// Görsel (NVIDIA, yenilendi): ızgara tavuk, salata kâsesi, fırın sebze, esmer ekmek — tabağın tamamı polaroid kartta.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, GorselKart, Ikon, ilerle, INTER, kelimeZamani, Liste, pop, RENK, SP } from "../kutuphane";

// "A GOOD MEAL → A LITTLE BETTER": noktalı haplar (dengeli iç boşluk)
const Akis: React.FC<{ t: number; x: number; y: number; adimlar: { bas: number; metin: string; renk: string }[] }> = ({ t, x, y, adimlar }) => (
  <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 16 }}>
    {adimlar.map((a, i) => {
      const [sc, al] = pop(t, a.bas, 0.5);
      return (
        <React.Fragment key={a.metin}>
          {i > 0 && <span style={{ opacity: al, fontFamily: ANTON, fontSize: 40, lineHeight: 1, color: RENK.altin }}>→</span>}
          <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
            background: RENK.kagitAcik, border: `3px solid ${a.renk}`, borderRadius: 999, padding: "9px 26px 9px 18px",
            fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: a.renk, flex: "none" }} />
            {a.metin}
          </div>
        </React.Fragment>
      );
    })}
  </div>
);

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure + 1);
  const tDegil = K(1, "not as"), tSihir = K(1, "magic trick");
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 70% at 40% 50%, #FBF8F1 0%, ${RENK.kagit} 60%, #EFE9DC 100%)` }}>
      {/* iyi öğün: kırpılmış kart, çok yavaş yakınlaşır */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transform: `scale(${1 + 0.03 * z})`,
        transformOrigin: "600px 450px" }}>
        <GorselKart t={t} bas={0.05} gorsel="tam/43" kirp={[200, 70, 1800, 1070]} x={600} y={450} w={800} h={500} aci={-2} />
      </div>
      <Akis t={t} x={600} y={800} adimlar={[
        { bas: K(0, "good meal"), metin: "A GOOD MEAL", renk: RENK.yesil },
        { bas: K(0, "a little better"), metin: "A LITTLE BETTER", renk: RENK.altin },
      ]} />
      {/* sağ sütun: bedava, zahmetsiz, alışkanlık */}
      <Baslik t={t} bas={0.05} metin="THINK OF IT AS" x={1130} y={250} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={1130} y={300} aralik={102} boyut={54} isaret="onay" genislik={700} ogeler={[
        { bas: K(0, "free"), metin: "FREE" },
        { bas: K(0, "low-effort"), metin: "LOW-EFFORT" },
        { bas: K(0, "habit"), metin: "HABIT" },
      ]} />
      {/* sihirli numara değil */}
      <Ikon t={t} bas={tDegil} ad="carpi" x={1170} y={712} boyut={86} zemin={RENK.mercan} />
      <Baslik t={t} bas={tDegil + 0.05} metin="NOT A" x={1236} y={712} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSihir} metin="MAGIC TRICK" x={1418} y={712} boyut={80} renk={RENK.mercan} />
    </AbsoluteFill>
  );
};

export default S43;

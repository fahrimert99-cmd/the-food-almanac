// Sahne 50 — insanlar farklı: dört kişi, üçü düzelen, biri düzelmeyen. Sağ kenardaki kesik görsel kenarı örtülür.
import React from "react";
import { ANTON, BaslikBlok, Hap, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kisi: React.FC<{ renk: string; ok: boolean }> = ({ renk, ok }) => (
  <svg width={110} height={150} viewBox="0 0 110 150">
    <circle cx={55} cy={36} r={26} fill={renk} />
    <path d="M 10 140 C 10 84 100 84 100 140 Z" fill={renk} />
    {ok && <path d="M 36 108 L 51 123 L 78 92" fill="none" stroke="#fff" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />}
  </svg>
);

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIyi = K(1, "three in four"), tOlmayan = K(1, "one in four");
  const [sa, aa] = pop(t, tIyi + 0.9, 0.5);
  const [sb, ab] = pop(t, tOlmayan + 0.9, 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1800])} />
      {/* görselin sağ kenarını örten kâğıt zemin */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 700,
        background: `linear-gradient(to right, rgba(246,243,236,0) 0%, rgba(246,243,236,1) 30%, rgba(246,243,236,1) 100%)` }} />
      <BaslikBlok t={t} bas={K(0, "People")} satirlar={["PEOPLE", "DIFFER"]} x={1860} y={140} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.altin]} />
      <div style={{ position: "absolute", left: 1400, top: 470, display: "flex", gap: 16 }}>
        {[0, 1, 2, 3].map((i) => {
          const [sc, al] = pop(t, (i < 3 ? tIyi : tOlmayan) + 0.15 * (i < 3 ? i : 0), 0.5);
          return <div key={i} style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "50% 100%" }}>
            <Kisi renk={i < 3 ? RENK.yesil : RENK.gri} ok={i < 3} /></div>;
        })}
      </div>
      {aa > 0 && <div style={{ position: "absolute", left: 1400, top: 650, transform: `scale(${sa})`, transformOrigin: "0 50%", opacity: aa }}>
        <Hap metin="3 IN 4 IMPROVED" renk={RENK.yesil} boyut={30} /></div>}
      {ab > 0 && <div style={{ position: "absolute", left: 1400, top: 740, transform: `scale(${sb})`, transformOrigin: "0 50%", opacity: ab }}>
        <Hap metin="1 IN 4 DID NOT" renk={RENK.gri} boyut={30} /></div>}
      <div style={{ position: "absolute", left: 1400, top: 830, fontFamily: INTER, fontWeight: 700, fontSize: 22, color: RENK.gri,
        opacity: pop(t, K(1, "2023"), 0.5)[1] }}>2023 TRIAL · LOW-SODIUM DIET</div>
    </>
  );
};
export default S50;

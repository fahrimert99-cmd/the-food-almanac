// Sahne 26 — Neden 2: doz ve süre. Sağda başlık + 120 mg → 6 g çubuğu (şematik, yeni sayı yok), solda ölçü kaşıkları.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const BX0 = 1260, BX1 = 1830, BY = 790;

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: ["120 MG", "TO 6 G"], not: "" };
  const t120 = K(1, "120"), t6 = K(1, "6 grams");
  const pBar = eout(ilerle(t, t120, t6 - t120 + 0.5));
  const [sM, aM] = pop(t, K(2, "far less"), 0.5);
  const [s1, a1] = pop(t, t120, 0.45);
  const [s2, a2] = pop(t, t6, 0.45);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])} />
      <AltSis a={0.4} />
      <Baslik t={t} bas={K(0, "dose") - 0.2} metin="REASON 2" x={1260} y={100} boyut={34} renk={RENK.altin} font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={K(0, "dose") - 0.05} metin="DOSE + TIME" x={1256} y={170} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={t120} metin={b.satirlar[0]} x={1260} y={330} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={t6 - 0.1} metin={b.satirlar[1]} x={1260} y={455} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={t6 + 0.4} metin={b.not ?? ""} x={1260} y={560} boyut={28} genislik={570} />
      <Not t={t} bas={K(1, "month")} metin="Duration: a month to a few months" x={1260} y={640} boyut={28} genislik={570} renk={RENK.gri} />
      {/* doz aralığı çubuğu */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={BX0} y1={BY} x2={BX1} y2={BY} stroke={RENK.murekkep} strokeOpacity={0.18} strokeWidth={14} strokeLinecap="round" />
        <line x1={BX0} y1={BY} x2={BX0 + (BX1 - BX0) * pBar} y2={BY} stroke={RENK.altin} strokeWidth={14} strokeLinecap="round" />
        <g transform={`translate(${BX0} ${BY}) scale(${s1}) translate(${-BX0} ${-BY})`} opacity={a1}>
          <circle cx={BX0} cy={BY} r={14} fill={RENK.kagitAcik} stroke={RENK.lacivert} strokeWidth={4} />
        </g>
        <g transform={`translate(${BX1} ${BY}) scale(${s2}) translate(${-BX1} ${-BY})`} opacity={a2}>
          <circle cx={BX1} cy={BY} r={14} fill={RENK.kagitAcik} stroke={RENK.lacivert} strokeWidth={4} />
        </g>
        <g transform={`translate(${BX0 + 40} ${BY - 36}) scale(${sM})`} opacity={aM}>
          <path d="M -14 -6 L 0 12 L 14 -6 Z" fill={RENK.mercan} transform="translate(0 20)" />
        </g>
      </svg>
      <Baslik t={t} bas={t120} metin="120 MG" x={BX0} y={BY + 50} boyut={34} renk={RENK.lacivert} font="inter" agirlik={800} />
      <Baslik t={t} bas={t6} metin="6 G" x={BX1} y={BY + 50} boyut={34} renk={RENK.lacivert} font="inter" agirlik={800} hiza="sag" />
      {/* sıradan kullanıcı: küçük kaşık */}
      <Etiket t={t} bas={K(2, "far less")} capa={[287, 767]} konum={[420, 905]} metin="SPRINKLE FAR LESS" renk={RENK.mercan} />
    </>
  );
};

export default S26;

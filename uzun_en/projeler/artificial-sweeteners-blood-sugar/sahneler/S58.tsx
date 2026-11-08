// Sahne 58 — özet: derlemeler (29 ve 26 çalışma) + Suez çalışması (120 kişi).
import React from "react";
import { Etiket, Hap, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// konumlu hap
const Pop: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNum = K(0, "29"), tRaise = K(0, "raise"), tOne = K(1, "two-week"), t120 = K(1, "120");
  const tSmall = K(1, "small"), tSac = K(1, "saccharin"), tSuc = K(1, "sucralose,"), tBut = K(1, "but"), tAsp = K(1, "aspartame"), tSte = K(1, "stevia.");
  const tS2 = K(1, "One") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])} />
      {/* 1. cümle */}
      <VurguRozet t={t} bas={tNum} bitis={tS2} vurgu="29 + 26" not="RANDOMIZED TRIALS" x={1450} y={170} genislik={420} />
      <Pop t={t} bas={tRaise} bitis={tS2} x={1450} y={450} metin="NO RISE IN BLOOD SUGAR" renk={RENK.yesil} boyut={30} />
      <Ikon t={t} bas={tRaise + 0.2} bitis={tS2} ad="onay" x={1450} y={540} zemin={RENK.yesil} boyut={84} />
      {/* 2. cümle */}
      <Pop t={t} bas={tOne} x={1450} y={130} metin="ONE TWO-WEEK TRIAL" renk={RENK.lacivert} boyut={30} />
      <VurguRozet t={t} bas={t120} vurgu="120" not="HEALTHY ADULTS" x={1450} y={200} genislik={380} boyut={90} />
      <Not t={t} bas={tSmall} metin="SMALL RISE" x={1335} y={430} hiza="orta" boyut={28} agirlik={800} renk={RENK.mercan} />
      <Not t={t} bas={tBut} metin="NO RISE" x={1650} y={430} hiza="orta" boyut={28} agirlik={800} renk={RENK.yesil} />
      <Pop t={t} bas={tSac} x={1335} y={500} metin="SACCHARIN" renk={RENK.mercan} boyut={26} />
      <Pop t={t} bas={tSuc} x={1335} y={570} metin="SUCRALOSE" renk={RENK.mercan} boyut={26} />
      <Pop t={t} bas={tAsp} x={1650} y={500} metin="ASPARTAME" renk={RENK.yesil} boyut={26} />
      <Pop t={t} bas={tSte} x={1650} y={570} metin="STEVIA" renk={RENK.yesil} boyut={26} />
    </>
  );
};
export default S58;

// Sahne 32 — diğer küçük stevia denemeleri (kâğıt yazısı kusuru kartla örtülü)
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};
const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.1;
  const tMixed = K(0, "mixed");
  return (
    <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [100, 80, 1700])}>
      <Etiket t={t} bas={K(0, "stevia")} capa={[1200, 830]} konum={[1560, 900]} metin="STEVIA" renk={RENK.yesil} />
      {/* kart: kâğıt yığınının sahte yazısını örter */}
      <div style={{ position: "absolute", left: 250, top: 370, width: 810, height: 370, background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`,
        borderRadius: 18, boxShadow: "0 12px 30px rgba(48,40,34,0.22)", transform: "rotate(-1.2deg)" }} />
      <Baslik t={t} bas={0.3} bitis={tMixed - 0.1} metin="OTHER SMALL" x={655} y={500} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "stevia trials")} bitis={tMixed - 0.1} metin="STEVIA TRIALS" x={655} y={620} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tMixed} bitis={t1} metin="MIXED" x={655} y={500} boyut={110} renk={RENK.altin} hiza="orta" />
      <Baslik t={t} bas={tMixed + 0.2} bitis={t1} metin="RESULTS" x={655} y={630} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "mostly neutral")} metin="MOSTLY" x={655} y={470} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "neutral")} metin="NEUTRAL" x={655} y={580} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "small and short")} metin="BUT SMALL AND SHORT STUDIES" x={655} y={660} boyut={30} agirlik={800} hiza="orta" renk={RENK.mercan} />
    </Kamera>
  );
};

export default S32;

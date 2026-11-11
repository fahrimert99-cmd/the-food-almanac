// Sahne 14 — DASH tepsisi: yüksek potasyum, düşük sodyum; DASH-Sodium denemesi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Sira: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; x: number }> = ({ t, bas, bitis, metin, renk, x }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: 340, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
    <Hap metin={metin} renk={renk} boyut={32} />
  </div>;
};

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTyp = K(1, "typical");
  const tDash2 = K(1, "DASH diet") ;
  const t3 = K(1, "three"), t30 = K(1, "thirty");
  const [sl, al] = pop(t, K(0, "low"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [90, 100, 1740])}>
        <Etiket t={t} bas={K(0, "potassium")} capa={[467, 533]} konum={[800, 200]} metin="HIGH POTASSIUM" renk={RENK.altin} bitis={K(1, "DASH-Sodium")} />
        <div style={{ position: "absolute", left: 1220, top: 200, transform: `translate(-50%, -50%) scale(${sl})`, opacity: al * (t < K(1, "DASH-Sodium") ? 1 : 0) }}>
          <Hap metin="LOW SODIUM" renk={RENK.yesil} boyut={28} />
        </div>
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["DASH", "DIET"]} x={1860} y={170} boyut={88} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "412")} vurgu="412" not="ADULTS" x={960} y={110} genislik={300} />
      <Sira t={t} bas={tTyp} bitis={t3 - 0.1} metin="TYPICAL AMERICAN DIET" renk={RENK.mercan} x={640} />
      <Sira t={t} bas={tDash2} bitis={t3 - 0.1} metin="DASH DIET" renk={RENK.yesil} x={1150} />
      <Sira t={t} bas={t3} bitis={t30 - 0.1} metin="3 SODIUM LEVELS" renk={RENK.altin} x={900} />
      <Sira t={t} bas={t30} bitis={1e9} metin="30 DAYS EACH" renk={RENK.lacivert} x={900} />
      <KaynakEtiketi t={t} metin="Sacks et al. · N Engl J Med · 2001" />
    </>
  );
};

export default S14;
